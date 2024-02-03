import { FunctionalComponent } from "./FunctionalComponent";
import { Reducer } from "./Reducer";

import { useContext } from "react";
import { ThemeContext } from "./App";

export function WrappedComponent(params) {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="wrapped">
      {/* <FunctionalComponent></FunctionalComponent> */}
      <Reducer></Reducer>
    </div>
  );
}
