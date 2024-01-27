import { Link } from "react-router-dom";

export function Main(props) {
  return (
    <>
      <Link to="/" className="links">
        Main
      </Link>
      <Link to="/about" className="links">
        About
      </Link>
      <Link to="/news" className="links">
        News
      </Link>
    </>
  );
}
