import React from 'react';
import Link from 'next/link';

function HeaderNav() {
  return (
    <ul className="header__menu">
            <li className="header__item">
              <Link className="header__link" href="#">
                Company
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" href="#">
                Services
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" href="#">
                Portfolio
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" href="#">
                Careers
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" href="#">
                Contact
              </Link>
            </li>
          </ul>
  )
}

export default HeaderNav