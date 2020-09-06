import React from "react";
import LogoFooter from "../../assets/images/logo-focus-footer.svg";
import LogoGithub from "../../assets/images/logoGitHub.svg";
import LogoLinkedin from "../../assets/images/linkedin.svg";
import LogoFacebook from "../../assets/images/facebook.svg";
import "../../assets/styles/components/footer/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <ul className="logo__footer">
      <figure>
        <a href="index.html">
          <img src={LogoFooter} height="30" alt="Logo Focus" />
        </a>
      </figure>
    </ul>

    <ul className="item__menu-footer">
      <li>
        <a href="#">Soporte</a>
      </li>
      <li>
        <a href="#">Nosotros</a>
      </li>
    </ul>

    <ul className="item__menu-footer">
      <li>
        <a href="#">Noticias</a>
      </li>
      <li>
        <a href="#">Privacidad</a>
      </li>
    </ul>

    <ul className="social__footer">
      <div className="social">
        <li className="social__icon">
          <a href="#">
            <img src={LogoGithub} width="20" alt="GitHub" />
          </a>
          <p className="social__footer-github">Github</p>
        </li>
        <li className="social__icon">
          <a href="#">
            <img src={LogoLinkedin} width="20" alt="Linkedin" />
          </a>
          <p className="">Linkedin</p>
        </li>
        <li className="social__icon">
          <a href="#">
            <img src={LogoFacebook} width="20" alt="Facebook" />
          </a>
          <p className="social__footer-text">Facebook</p>
        </li>
      </div>
    </ul>
  </footer>
);

export default Footer;
