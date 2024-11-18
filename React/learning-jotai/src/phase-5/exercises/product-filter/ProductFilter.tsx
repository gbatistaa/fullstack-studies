import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";
import { atomWithStorage } from "jotai/utils";
import React, { useRef } from "react";
import { Product } from "./Product";
import styles from "./productFilter.module.css";

export type Category = "eletronics&" | "clothes&" | "toys&" | "";

const categoryAtom = atomWithHash<Category[]>("category", [""]);
const priceRangeAtom = atomWithHash<number[]>("price-range", [0, 100]);
const productsAtom = atomWithStorage<Product[]>("products", []);

function ProductFilter(): JSX.Element {
  const categoryRef = useRef<Category[]>([]);
  const [category, setCategory] = useAtom(categoryAtom);
  const [priceRange, setPriceRange] = useAtom(priceRangeAtom);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked, name } = event.target;
    if (checked) {
      categoryRef.current = [...categoryRef.current, name as Category];
    } else {
      categoryRef.current = [
        ...categoryRef.current.filter((cat) => cat != (name as Category)),
      ];
    }
    console.log(categoryRef.current);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setCategory(categoryRef.current);
  };

  return (
    <section className={styles.productFilterContainer}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="checkbox"
          name="eletronics&"
          onChange={(e) => handleCheckbox(e)}
        />
        <input
          type="checkbox"
          name="clothes&"
          onChange={(e) => handleCheckbox(e)}
        />
        <input
          type="checkbox"
          name="toys&"
          onChange={(e) => handleCheckbox(e)}
        />
        <button type="submit">Change Filter</button>
      </form>
    </section>
  );
}

export default ProductFilter;
