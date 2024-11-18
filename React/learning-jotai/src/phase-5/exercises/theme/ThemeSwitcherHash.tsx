import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";
import React from "react";
import styles from "./theme.module.css";

enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

const themeHashAtom = atomWithHash<Theme>("theme", Theme.DARK);

function ThemeSwitcherHash(): JSX.Element {
  const [theme, setTheme] = useAtom(themeHashAtom);

  const switchTheme = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className={theme === Theme.DARK ? styles.divDark : styles.divLight}>
        <h1
          className={
            theme === Theme.DARK ? styles.titleDark : styles.titleLight
          }
        >
          {theme}
        </h1>
      </div>
      <button type="button" onClick={(e) => switchTheme(e)}>
        Switch Theme
      </button>
    </section>
  );
}

export default ThemeSwitcherHash;
