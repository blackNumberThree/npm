import { useRef } from "react";

export function FunctionalComponent(props) {
  let number = 1;
  // console.log(props);
  // const ref = useRef(0);
  // const handleSubmit = (event) => {
  /* Скасуємо реакцію оброблювача за замовченням */
  // event.preventDefault();
  /* Отримуємо доступ до текстового поля */
  // let fName = document.getElementById("userName");
  // let fName = ref.current.value;
  // console.log(fName);
  // };
  function iterator() {
    number = number + 1;
  }

  return (
    <>
      <p>Hello i am functional Component</p>
      <p>{number}</p>
      <button onClick={iterator}>Press me</button>
    </>
    // <form onSubmit={handleSubmit}>
    //   <input type="text" id="userName" ref={ref} />
    //   <input type="submit" value="Click me" />
    // </form>
  );
}
