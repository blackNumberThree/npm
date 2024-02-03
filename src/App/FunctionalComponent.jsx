import React, { useState, useEffect } from "react";

export function FunctionalComponent(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
    return () => console.log("function component will unmount");
  }, []);
  return (
    <>
      <div className="App">
        <h1>Рахунок : {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>
          збільшити рахунок +1
        </button>
      </div>
    </>
  );
}
// useEffect(() => {
//   document.title = `You clicked ${counter} times`;
// },[]);

// useEffect(() => {
//   document.title = `You clicked ${counter} times`;
//   return () => "Component will unmount";
// },);
