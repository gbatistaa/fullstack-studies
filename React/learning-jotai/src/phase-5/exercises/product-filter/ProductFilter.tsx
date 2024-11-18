import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";
import { atomWithStorage } from "jotai/utils";
import React, { useRef } from "react";
import { Product } from "./Product";
import styles from "./productFilter.module.css";

export type Category = "eletronics" | "clothes" | "toys" | "";

const categoryAtom = atomWithHash<Category>("category", "");
const priceRangeAtom = atomWithHash<number[]>("price-range", [0, 100]);
const productsAtom = atomWithStorage<Product[]>("products", []);

function ProductFilter(): JSX.Element {
  const categoryRef = useRef<Category[]>([]);
  const [category, setCategory] = useAtom(categoryAtom);
  const [priceRange, setPriceRange] = useAtom(priceRangeAtom);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { checked, name } = event.target;
    categoryRef.current = [
      ...categoryRef.current,
      checked ? (name as Category) : "",
    ];
  };

  return (
    <section className={styles.productFilterContainer}>
      <form>
        <input
          type="checkbox"
          name="eletronics"
          onChange={(e) => handleCheckbox(e)}
        />
        <input
          type="checkbox"
          name="clothes"
          onChange={(e) => handleCheckbox(e)}
        />
        <input
          type="checkbox"
          name="toys"
          onChange={(e) => handleCheckbox(e)}
        />
        <button type="submit">Change Filter</button>
      </form>
    </section>
  );
}

export default ProductFilter;
