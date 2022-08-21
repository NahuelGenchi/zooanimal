import { LinkIcon } from "../index";

import "./Footer.scss";

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-container">
        <div className="fc-links">
          <LinkIcon icon="logo-github" link="https://github.com/NahuelGenchi"/>
          <LinkIcon icon="logo-linkedin" link="https://www.linkedin.com/in/nahuel-genchi/"/>
          <LinkIcon icon="mail" link="mailto:nahuelgenchi@gmail.com"/>
        </div>
        <div className="fc-info">
          <span>© 2022 Nahuel Genchi</span>
          <span>Data received by <a href="https://zoo-animal-api.herokuapp.com/" target="_blank" rel="noreferrer">Zoo Animal API</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;