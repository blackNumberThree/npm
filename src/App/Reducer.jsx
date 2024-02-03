import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  if (action.type === "decrement_age") {
    return {
      age: state.age - 1,
    };
  }
}

export function Reducer() {
  // useReducer(reducerFunction, initialValue)
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement_age" });
        }}
      >
        decrement age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
