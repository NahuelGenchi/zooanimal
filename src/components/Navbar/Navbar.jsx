import macaw from "../../assets/macaw.png";

import "./Navbar.scss";

const Navbar = () => {
  return(
    <div className="navbar-container">
      <div className="nc-subcontainer">
        <div className="ncs-logo">
          <img src={macaw} alt="Zoo Animals logo" />
          <a href="/">Zoo Animals</a>
        </div>
        <div className="nc-button">
          <ion-icon name="menu"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;