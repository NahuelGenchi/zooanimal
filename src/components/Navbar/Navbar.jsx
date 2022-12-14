import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import macaw from "../../assets/macaw.png";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuDisplay = () => {
    toggleMenu === false ? setToggleMenu(true) : setToggleMenu(false);
  };

  const categories = [
    "Amphibian",
    "Bird",
    "Fish",
    "Mammal",
    "Marsupial",
    "Reptile",
  ];

  return(
    <div className="navbar-container">
      <div className="nc-subcontainer">
        <div className="ncs-logo">
          <img src={macaw} alt="Zoo Animals logo" />
          <Link to="/">Zoo Animals</Link>
        </div>
        <nav className="ncs-menu-desktop">
          <ul>
            {categories.map(category => <li><NavLink to={`/category/${category}`} className={({isActive}) => (isActive ? "active" : "inactive")}>{category}</NavLink></li>)}
          </ul>
        </nav>
        <div className="ncs-button" onClick={toggleMenuDisplay}>
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className="ncs-menu" style={{ display: toggleMenu === true ? "initial" : "none" }}>
          <div className="ncsm-container">
            <div className="ncsmc-top">
              <div className="ncs-logo">
                <img src={macaw} alt="Zoo Animals logo" />
                <Link to="/" onClick={toggleMenuDisplay}>Zoo Animals</Link>
              </div>
              <div className="ncs-button" onClick={toggleMenuDisplay}>
                <ion-icon name="close"></ion-icon>
              </div>
            </div>
            <nav className="ncsmc-main">
              {categories.map((category, index) => {
                return(
                  <NavLink to={`/category/${category}`} className={({isActive}) => (isActive ? "active" : "inactive")} key={index} onClick={toggleMenuDisplay}>{category.toLocaleUpperCase()}</NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;