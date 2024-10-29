import { atom, useAtom } from "jotai";
import React from "react";
import Item from "../classes/Item";

const newItemAtom = atom<Item>(new Item());

function NewItemForm(): JSX.Element {
  const [newItemInfo, setNewItemInfo] = useAtom(newItemAtom);

  // const handleClickEvent = (): void => { };

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
      <input
        type="text"
        id="name"
        onChange={(e) => handleInputValueChange(e, 0)}
      />
      <input
        type="text"
        id="price"
        onChange={(e) => handleInputValueChange(e, 1)}
      />
      <input
        type="text"
        id="quantity"
        onChange={(e) => handleInputValueChange(e, 2)}
      />
      <button type="button"></button>
    </form>
  );
}

export default NewItemForm;
