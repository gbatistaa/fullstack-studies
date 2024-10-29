import { atom, useAtom } from "jotai";
import Item from "../classes/Item";
import CartItem from "./CartItem";

export const cartAtom = atom<Item[]>([new Item()]);

function Cart(): JSX.Element {
  const [shoppingCart, setShoppingCart] = useAtom(cartAtom);
  return (
    <div>
      {shoppingCart.map((item, index) => {
        return <CartItem index={index} key={index} />;
      })}
    </div>
  );
}

export default Cart;
