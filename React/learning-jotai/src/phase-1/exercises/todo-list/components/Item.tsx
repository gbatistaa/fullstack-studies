import { useAtom } from "jotai";
import styles from "../css/item.module.css";
import { listAtom } from "./Todo";

function Item({ index }: { index: number }): JSX.Element {
  const [list, setList] = useAtom(listAtom);

  const updateItemText = (itemKey: number, newText: string): void => {
    setList((prevList) => {
      return prevList.map((itemList, i) => {
        return itemKey == i ? { ...itemList, itemText: newText } : itemList;
      });
    });
  };
  console.log(index);

  return (
    <>
      <h1>{list[index].itemText}</h1>
      <div className={styles.itemContainer}>
        <input
          type="text"
          onChange={(e) => updateItemText(index, e.target.value)}
        />
        <div className={styles.checkboxContainer}>
          <input type="checkbox" name="completed" id="completed" />
        </div>
      </div>
    </>
  );
}

export default Item;
