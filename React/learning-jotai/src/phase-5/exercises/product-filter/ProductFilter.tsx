import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";
import { atomWithStorage } from "jotai/utils";
import { useRef } from "react";
import { Product } from "./Product";
import styles from "./productFilter.module.css";

export type Category = "eletronics" | "clothes" | "toys" | "all";

const categoryAtom = atomWithHash<Category>("category", "all");
const priceRangeAtom = atomWithHash<number[]>("price-range", [0, 100]);
const productsAtom = atomWithStorage<Product[]>("products", []);

function ProductFilter(): JSX.Element {
  const categoryRef = useRef<Category>("all");
  const [category, setCategory] = useAtom(categoryAtom);
  const [priceRange, setPriceRange] = useAtom(priceRangeAtom);

  return (
    <section className={styles.productFilterContainer}>
      <form>
        <input type="radio" name="category" />
        <input type="radio" name="category" />
        <input type="radio" name="category" />
        <input type="radio" name="category" />
      </form>
    </section>
  );
}

export default ProductFilter;
