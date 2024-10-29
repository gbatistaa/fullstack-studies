import { atom, useAtom } from "jotai";
import React from "react";
import Item from "../classes/Item";
import styles from "../css/newItemForm.module.css";
import { cartAtom } from "./Cart";

const newItemAtom = atom<Item>(new Item());

function NewItemForm(): JSX.Element {
  const [newItemInfo, setNewItemInfo] = useAtom(newItemAtom);
  const [, setShoppingCart] = useAtom(cartAtom);

  const handleClickEvent = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault();
    setShoppingCart((currentCart) => {
      return currentCart.concat([newItemInfo]);
    });
  };

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    changeCode: number,
  ): void => {
    event.preventDefault();
    const eventValue = event.target.value;

    switch (changeCode) {
      case 0:
        setNewItemInfo((currentInfo) => {
          return { ...currentInfo, name: eventValue };
        });
        break;
      case 1:
        setNewItemInfo((currentInfo) => {
          return { ...currentInfo, price: parseFloat(eventValue) };
        });
        break;
      case 2:
        setNewItemInfo((currentInfo) => {
          return { ...currentInfo, quantity: parseInt(eventValue) };
        });
        break;
      default:
        console.error("Invalid Code");
        break;
    }
  };

  return (
    <form action="" className={styles.newItemForm}>
      <h2>New Item Form</h2>
      <input
        type="text"
        id="name"
        onChange={(e) => handleInputValueChange(e, 0)}
        className={styles.inputForm}
        autoComplete="off"
      />
      <input
        type="text"
        id="price"
        onChange={(e) => handleInputValueChange(e, 1)}
        className={styles.inputForm}
        autoComplete="off"
      />
      <input
        type="text"
        id="quantity"
        onChange={(e) => handleInputValueChange(e, 2)}
        className={styles.inputForm}
        autoComplete="off"
      />
      <button type="button" onClick={(e) => handleClickEvent(e)}>
        New Item
      </button>
    </form>
  );
}

export default NewItemForm;
