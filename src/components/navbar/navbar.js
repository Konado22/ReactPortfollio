//check
//background image for banner?
const Navbar = () => {
  return (
    <nav className="bannerstuff bg-dark mb-0">
      <h1 className="bigger  mtb-3 text-light">Jesse Draper</h1>
      <h3 className="bigger  mtb-3 text-light" id="subheading">
        Web Developer
      </h3>

      <img
        src="./assets/profile pic small.jpg"
        id="profile-pic"
        alt="its me"
      ></img>

      <ul className="navbar mb-0">
        <li className="yep">
          <a className="nav-link text-light" href="#About-Me">
            About Me
          </a>
        </li>
        <li className="yep">
          <a className="nav-link text-light" href="#Work">
            Work
          </a>
        </li>
        <li className="yep">
          <a className="nav-link text-light" href="#Contact-Me">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
