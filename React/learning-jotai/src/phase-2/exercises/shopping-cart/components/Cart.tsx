import { atom, useAtom } from "jotai";
import Item from "../classes/Item";
import CartItem from "./CartItem";
import NewItemForm from "./NewItemForm";

export const cartAtom = atom<Item[]>([
  new Item("Apple", 1.5, 10),
  new Item("Pinapple", 2.3, 15),
]);

function Cart(): JSX.Element {
  const [shoppingCart, setShoppingCart] = useAtom(cartAtom);
  return (
    <div>
      <NewItemForm />
      {shoppingCart.map((item, index) => {
        return <CartItem index={index} key={index} />;
      })}
    </div>
  );
}

export default Cart;
