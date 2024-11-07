import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React from "react";
import styles from "./atomWithStorage.module.css";

enum ColorTheme {
  LIGHT,
  DARK,
}

const themeAtom = atomWithStorage<ColorTheme>("theme", ColorTheme.LIGHT);

function ThemeSwitcherWithStorage(): JSX.Element {
  const [theme, setTheme] = useAtom(themeAtom);

  const switchTheme = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setTheme((prev) =>
      prev === ColorTheme.LIGHT ? ColorTheme.DARK : ColorTheme.LIGHT,
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={
          theme === ColorTheme.LIGHT
            ? styles.divLightTheme
            : styles.divDarkTheme
        }
      >
        <h1>{theme === ColorTheme.LIGHT ? "LIGHT" : "DARK"}</h1>
      </div>
      <button onClick={(e) => switchTheme(e)} type="button">
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeSwitcherWithStorage;
