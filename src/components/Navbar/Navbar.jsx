import { useState } from "react";

import macaw from "../../assets/macaw.png";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuDisplay = () => {
    toggleMenu === false ? setToggleMenu(true) : setToggleMenu(false);
  };

  return(
    <div className="navbar-container">
      <div className="nc-subcontainer">
        <div className="ncs-logo">
          <img src={macaw} alt="Zoo Animals logo" />
          <a href="/">Zoo Animals</a>
        </div>
        <div className="ncs-button" onClick={toggleMenuDisplay}>
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className="ncs-menu" style={{ display: toggleMenu === true ? "initial" : "none" }}>
          <div className="ncsm-container">
            <div className="ncsmc-top">
              <div className="ncs-logo">
                <img src={macaw} alt="Zoo Animals logo" />
                <a href="/">Zoo Animals</a>
              </div>
              <div className="ncs-button" onClick={toggleMenuDisplay}>
                <ion-icon name="close"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;