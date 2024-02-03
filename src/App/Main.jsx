import { Link } from "react-router-dom";

export function Main(props) {
  return (
    <>
      <Link to="/AboutCompany" className="links">
        About page
      </Link>
      <Link to="/news" className="links">
        News page
      </Link>
      <h2>This is main page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempore
        iste rerum quibusdam numquam, commodi hic error sapiente modi sunt
        veniam minus odit soluta nostrum adipisci a magnam! Porro, minima!
      </p>
    </>
  );
}

{
  /* <Link to="/" className="links">
Main page
</Link>
<Link to="/AboutCompany" className="links">
About page
</Link>
<Link to="/news" className="links">
News page
</Link> */
}
