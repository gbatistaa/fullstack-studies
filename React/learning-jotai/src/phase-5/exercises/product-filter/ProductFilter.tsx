import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";
import { atomWithStorage } from "jotai/utils";
import React from "react";
import { Product } from "./Product";
import styles from "./productFilter.module.css";

export type Category = "eletronics&" | "clothes&" | "toys&" | "";

const categoryAtom = atomWithHash<Category[]>("category", []);
const priceRangeAtom = atomWithHash<number[]>("price-range", [0, 100]);
const productsAtom = atomWithStorage<Product[]>("products", []);

function ProductFilter(): JSX.Element {
  const [category, setCategory] = useAtom(categoryAtom);
  const [priceRange, setPriceRange] = useAtom(priceRangeAtom);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked, name } = event.target;
    event.target.checked = !checked;
    if (checked) {
      setCategory((prevCats) => prevCats.concat([name as Category]));
    } else {
      setCategory((prevCats) =>
        prevCats.filter((cat) => cat !== (name as Category)),
      );
    }
  };

  return (
    <section className={styles.productFilterContainer}>
      <input
        type="checkbox"
        name="eletronics&"
        onChange={(e) => handleCheckbox(e)}
        checked={category.includes("eletronics&")}
      />
      <input
        type="checkbox"
        name="clothes&"
        onChange={(e) => handleCheckbox(e)}
        checked={category.includes("clothes&")}
      />
      <input
        type="checkbox"
        name="toys&"
        onChange={(e) => handleCheckbox(e)}
        checked={category.includes("toys&")}
      />
    </section>
  );
}

export default ProductFilter;
