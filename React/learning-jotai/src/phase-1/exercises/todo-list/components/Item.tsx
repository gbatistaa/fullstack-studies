import { useAtom } from "jotai";
import ListItem from "../classes/listItem";
import styles from "../css/item.module.css";
import { listAtom } from "./Todo";

function Item({ info, key }: { info: ListItem; key: number }): JSX.Element {
  const [list, setList] = useAtom(listAtom);

  const updateItemText = (itemKey: number, newText: string): void => {
    setList((prevList) => {
      return prevList.map((itemList, index) => {
        return itemKey == index ? { ...itemList, itemText: newText } : itemList;
      });
    });
  };

  return (
    <>
      <h1>{list[key].itemText}</h1>
      <div className={styles.itemContainer}>
        <input
          type="text"
          onChange={(e) => updateItemText(key, e.target.value)}
        />
        <div className={styles.checkboxContainer}>
          <input type="checkbox" name="completed" id="completed" />
        </div>
      </div>
    </>
  );
}

export default Item;
