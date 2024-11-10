import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React, { useRef, useState } from "react";
import Product from "../classes/Product";
import styles from "../css/shoppingCart.module.css";
import CartProduct from "./CartProduct";

const cartAtomStorage = atomWithStorage<Product[]>("savedProducts", []);

function ShoppingCart(): JSX.Element {
  const newProductRef = useRef<Product>(new Product());
  const [products, setProducts] = useAtom(cartAtomStorage);
  const [productsIds, setProductsIds] = useState<number[]>([]);

  const generateProductId = (product: Product, idsList: number[]): number => {
    const { name } = product;
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash += name.charCodeAt(i);
    }
    let acumulator = 1;
    let bruteHash = hash % 571;
    while (idsList.includes(bruteHash)) {
      bruteHash = bruteHash + acumulator * acumulator;
      acumulator++;
    }
    return bruteHash;
  };

  const handleSubmitCreation = (
    event: React.FormEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();
    const { name, price, quantity } = newProductRef.current;
    let newProduct = new Product(name, price, quantity);
    const newId = generateProductId(newProduct, productsIds);
    newProduct = { ...newProduct, id: newId };
    setProductsIds((prevIds): number[] => prevIds.concat([newId]));
    setProducts((prevProducts) => prevProducts.concat([newProduct]));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    newProductRef.current = {
      ...newProductRef.current,
      [name]: value,
    };
  };

  return (
    <section className={styles.shoppingCartContainer}>
      <div className={styles.productsContainer}>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <CartProduct key={index} id={productsIds[index]} />
              <div>{JSON.stringify(product)}</div>
            </div>
          );
        })}
      </div>
      <form
        className={styles.newProductForm}
        onSubmit={(e) => handleSubmitCreation(e)}
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}

export default ShoppingCart;
