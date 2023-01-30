import React from 'react'
import Link from 'next/link'

function FooterNav() {
  return (
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
  )
}

export default FooterNav