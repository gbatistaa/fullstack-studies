import { useAtom } from "jotai";
import { cartAtomStorage } from "./ShoppingCart";

function CartProduct({ id }: { id: number }): JSX.Element {
  const [products] = useAtom(cartAtomStorage);
  const product = products.find((prod) => prod.id === id);

  if (!product) return <div>Produto Não Encontrado.</div>;

  return (
    <section>
      <div>{product.id}</div>
      <div>{product.name}</div>
      <div>{product.quantity}</div>
      <div>{product.price}</div>
    </section>
  );
}
export default CartProduct;
