import React from "react";
import Image from "next/image";

// Import Images
import Logo from "../../Assets/images/imcon-logo.svg";
import Link from "next/link";
import SocialList from "../socialList/socialList";
import FooterNav from "./footerNav";
import FooterContact from "./footerContact";

function Footer() {
  return (
    <div className="footer__component">
      <div className="container">
        <nav className="footer__nav">
          <div className="footer__box">
          <Image
              className="footer__logo"
              src={Logo}
              alt="logo"
              width={123}
              height={115}
            />
            <SocialList />
          </div>
          <div className="footer__box--mobile">
           <div className="footer__box__wrapper">
           <Image
              className="footer__logo"
              src={Logo}
              alt="logo"
              width={123}
              height={115}
            />
            <ul className="footer__menu--mobile">
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
           </div>
           <SocialList />
            </div>
          <FooterNav/>
          <FooterContact/>
          <h3 className="footer__title">Biz bilan bog`lanish</h3>
        </nav>
        <div className="footer__bottom">
          <p className="footer__bottom__text">2022 O`zbekiston brendi. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
