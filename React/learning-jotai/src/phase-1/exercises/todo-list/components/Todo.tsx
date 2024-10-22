import { atom, useAtom } from "jotai";
import ListItem from "../classes/listItem";
import styles from "../css/todo.module.css";
import Item from "./Item";

const initialValue: ListItem[] = [{ itemText: "test", status: true }];
export const listAtom = atom<ListItem[]>(initialValue);

function Todo(): JSX.Element {
  const [list, setList] = useAtom(listAtom);
  return (
    <div className={styles.listContainer}>
      {list.map((item, index) => {
        return <Item info={item} key={index} />;
      })}
    </div>
  );
}

export default Todo;
