import { atom, useAtom } from "jotai";
import ListItem from "../classes/listItem";
import styles from "../css/todo.module.css";
import Item from "./Item";

export const listAtom = atom<ListItem[]>([new ListItem()]);

function Todo(): JSX.Element {
  const [list, setList] = useAtom(listAtom);

  // Function that add a template list item on the todo list

  const createItem = (event: React.MouseEvent): ListItem => {
    event.preventDefault();
    const item = new ListItem();
    setList((prevList) => prevList.concat([item]));
    return item;
  };

  return (
    <div className={styles.listContainer}>
      <h1>TODO LIST</h1>
      <div className={styles.list}>
        {list.map((item, index) => {
          console.log(index, item);
          return <Item key={index} index={index} />;
        })}
      </div>
      <button type="button" onClick={(e) => createItem(e)}>
        Create Todo
      </button>
    </div>
  );
}

export default Todo;
