import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-dark">
        <div className="container-fluid container">
          <Link className="navbar-brand text-light fs-3" to="/">
            Meetups
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="🔍 Search by title and tags"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
