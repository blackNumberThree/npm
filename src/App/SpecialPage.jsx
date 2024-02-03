import { useMatches } from "react-router-dom";

export function SpecialPage(props) {
  let matches = useMatches("/:id");
  return (
    <div>
      <h1>SpecialPage :{matches[0].params.id}</h1>
    </div>
  );
}
