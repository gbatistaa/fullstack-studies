import { atom, useAtom } from "jotai";
import ListItem from "../classes/listItem";
import styles from "../css/todo.module.css";
import Item from "./Item";

export const listAtom = atom<ListItem[]>([new ListItem()]);

function Todo(): JSX.Element {
  const [list, setList] = useAtom(listAtom);
  const createItem = (): ListItem => {
    const item = new ListItem();
    setList((prevList) => prevList.concat([item]));
    return item;
  };

  return (
    <div className={styles.listContainer}>
      <h1>TODO LIST</h1>
      <div className={styles.list}>
        {list.map((item, index) => {
          return <Item info={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Todo;
