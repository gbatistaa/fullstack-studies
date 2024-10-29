import { useAtom } from "jotai";
import styles from "../css/cartitem.module.css";
import { cartAtom } from "./Cart";

function CartItem({ index }: { index: number }): JSX.Element {
  const [cartList, setCartList] = useAtom(cartAtom);
  return (
    <section className={styles.itemContainer}>
      <h2>{cartList[index].name}</h2>
      <h4>Price: {cartList[index].price}$</h4>
      <h4>Quantity: {cartList[index].quantity}</h4>
    </section>
  );
}

export default CartItem;
