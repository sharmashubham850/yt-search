import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="ui borderless huge menu">
      <div className="ui container">
        <a className="header item" href="/" onClick={(e) => e.preventDefault()}>
          <i className="youtube icon"></i>
          Youtube Search
        </a>
      </div>
    </div>
  );
};

export default Navbar;
