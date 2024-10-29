import { useAtom } from "jotai";
import styles from "../css/cartitem.module.css";
import { cartAtom } from "./Cart";

function CartItem({ index }: { index: number }): JSX.Element {
  const [cartList, setCartList] = useAtom(cartAtom);
  return (
    <section className={styles.itemContainer}>
      <div className={styles.itemPropDiv}>
        <input type="text" />
        <p>{cartList[index].name}</p>
      </div>
      <div className={styles.itemPropDiv}>
        <input type="text" />
        <p>{cartList[index].price}</p>
      </div>
      <div className={styles.itemPropDiv}>
        <input type="text" />
        <p>{cartList[index].quantity}</p>
      </div>
    </section>
  );
}

export default CartItem;
