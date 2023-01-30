import React from "react";
import Image from "next/image";

// Import Images
import Logo from "../../Assets/images/imcon-logo.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer__component">
      <div className="container">
        <nav className="footer__nav">
          <div className="footer__box">
            <Image src={Logo} alt="logo" width={123} height={115} />
            <ul className="footer__social">
              <li className="footer__social__item">
                <Link className="footer__social__link" href={"#"}>
                
                </Link>
              </li>
            </ul>
          </div>
          <ul className="footer__menu">
            <li className="footer__item">
              <Link className="footer__link" href="#">
                Company
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href="#">
                Services
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href="#">
                Portfolio
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href="#">
                Careers
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
