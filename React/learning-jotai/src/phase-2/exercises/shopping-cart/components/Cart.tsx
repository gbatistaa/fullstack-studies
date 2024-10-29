import { atom, useAtom } from "jotai";
import Item from "../classes/Item";
import styles from "../css/cart.module.css";
import CartItem from "./CartItem";
import NewItemForm from "./NewItemForm";

export const cartAtom = atom<Item[]>([]);

function Cart(): JSX.Element {
  const [shoppingCart, setShoppingCart] = useAtom(cartAtom);
  return (
    <>
      <NewItemForm />
      <div className={styles.cartContainer}>
        {shoppingCart.map((item, index) => {
          return <CartItem index={index} key={index} />;
        })}
      </div>
    </>
  );
}

export default Cart;
