export function JSXComponent(params) {
  const simpleElement = <span>hello everyone</span>;
  let arr = [2, 4, 6, 8];

  return (
    <div>
      {simpleElement}
      <img src="" alt="" />
      <p>When i get up, I say {simpleElement}</p>
      <p className="bigParagraph"></p>
      {/* {console.log(simpleElement)} */}
      <br />
      {"hello" + "world"}
      {/* {
          for (let index = 0; index < array.length; index++) {
             const element = array[index];}
        } */}
      {arr.map((el, i) => (
        <h1 key={i}>element:{el}</h1>
      ))}
      {/* {if (arr) {
          return "hello"
        }} */}
      {arr ? "hello" : "bye"}

      {/* {let x=1} */}
    </div>
  );
}
