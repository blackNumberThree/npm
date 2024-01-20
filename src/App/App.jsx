import { JSXComponent } from "./JSXomponent";
import { FunctionalComponent } from "./FunctionalComponent";
import { ClassComponent } from "./ClassComponent";
import "../index.css";
function App() {
  return (
    <>
      <FunctionalComponent></FunctionalComponent>
      <JSXComponent />
      <ClassComponent></ClassComponent>
    </>
  );
}

export default App;
