import { useContext } from "react";
import { ThemeContext } from "./App";

export function FunctionalComponent(props) {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <p>Hello i am functional Component</p>
      <p>{theme}</p>
    </>
  );
}
