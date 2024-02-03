import { Link } from "react-router-dom";

export function News() {
  return (
    <>
      <Link to="/" className="links">
        Main page
      </Link>
      <Link to="/AboutCompany" className="links">
        About page
      </Link>
      <h2>Our news</h2>
      <figure>
        <figcaption> first Cat</figcaption>
        <img src="./img/1.jpg" alt="kitty" />
      </figure>
      <figure>
        <figcaption> first Cat</figcaption>
        <img src="/img/2.jpg" alt="kitty" />
      </figure>{" "}
      <figure>
        <figcaption> first Cat</figcaption>
        <img src="./img/3.jpg" alt="kitty" />
      </figure>
    </>
  );
}
