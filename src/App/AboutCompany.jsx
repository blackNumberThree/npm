import { Link } from "react-router-dom";

export function AboutCompany() {
  return (
    <>
      <Link to="/" className="links">
        Main page
      </Link>
      <Link to="/news" className="links">
        News page
      </Link>
      <h2>About company</h2>
      <figure>
        <figcaption> All Cat</figcaption>
        <img src="/img/4.jpg" alt="kitty" />
      </figure>
    </>
  );
}
