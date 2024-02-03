import { WrappedComponent } from "./WrapedComponent";
import { createContext } from "react";

import "../index.css";

export const ThemeContext = createContext(null);

const someData = "dark";
function App() {
  return (
    <>
      <ThemeContext.Provider value={someData}>
        <WrappedComponent></WrappedComponent>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
