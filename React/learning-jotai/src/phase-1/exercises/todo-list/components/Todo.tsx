import { atom, useAtom } from "jotai";
import ListItem from "./listItem";
import styles from "./todo.module.css";

export const listAtom: ListItem[] = atom();

function Todo() {
  const [list, setList] = useAtom(listAtom);
  return <div className={styles.listContainer}></div>;
}
