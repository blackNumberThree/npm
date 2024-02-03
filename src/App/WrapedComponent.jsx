import { FunctionalComponent } from "./FunctionalComponent";
import { Reducer } from "./Reducer";

export function WrappedComponent(params) {
  return (
    <div className="wrapped">
      <FunctionalComponent></FunctionalComponent>
      <Reducer></Reducer>
    </div>
  );
}
