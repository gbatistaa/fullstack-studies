import { useAtom } from "jotai";
import styles from "../css/item.module.css";
import { listAtom } from "./Todo";

function Item({ index }: { index: number }): JSX.Element {
  const [list, setList] = useAtom(listAtom);

  const updateItemText = (itemKey: number, newText: string): void => {
    setList((prevList) => {
      return prevList.map((itemList, idx) => {
        return itemKey == idx ? { ...itemList, itemText: newText } : itemList;
      });
    });
  };

  const updateItemStatus = (itemKey: number, checkboxValue: boolean): void => {
    setList((prevList) => {
      return prevList.map((itemList, idx) => {
        return itemKey == idx
          ? { ...itemList, status: checkboxValue }
          : itemList;
      });
    });
  };
  console.log(index);

  return (
    <>
      <h3>{list[index].itemText}</h3>
      <h4>{list[index].status ? "Completed" : "Not Completed"}</h4>
      <div className={styles.itemContainer}>
        <input
          type="text"
          onChange={(e) => updateItemText(index, e.target.value)}
        />
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            onChange={(e) => updateItemStatus(index, e.target.checked)}
          />
        </div>
      </div>
    </>
  );
}

export default Item;
