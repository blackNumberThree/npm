import { JSXComponent } from "./JSXomponent";
import { FunctionalComponent } from "./FunctionalComponent";
import { ClassComponent } from "./ClassComponent";

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
