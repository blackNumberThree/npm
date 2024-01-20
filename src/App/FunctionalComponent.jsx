import { useRef } from "react";

export function FunctionalComponent() {
  // const ref = useRef(0);
  // const handleSubmit = (event) => {
  /* Скасуємо реакцію оброблювача за замовченням */
  // event.preventDefault();
  /* Отримуємо доступ до текстового поля */
  // let fName = document.getElementById("userName");
  // let fName = ref.current.value;
  // console.log(fName);
  // };

  return (
    <p>Hello i am functional Component</p>
    // <form onSubmit={handleSubmit}>
    //   <input type="text" id="userName" ref={ref} />
    //   <input type="submit" value="Click me" />
    // </form>
  );
}
