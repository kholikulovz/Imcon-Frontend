import React from 'react'

function FooterContact() {
  return (
    <ul className="footer__contact__list">
            <li className="footer__contact__item">
              <h4 className="footer__contact__title">Telefon nomer:</h4>
              <p className="footer__contact__text">+998 90 123-45-67</p>
            </li>
            <li className="footer__contact__item">
              <h4 className="footer__contact__title">Elektron pochta:</h4>
              <p className="footer__contact__text">Yurist@gmail.com</p>
            </li>
            <li className="footer__contact__item">
              <h4 className="footer__contact__title">Manzil:</h4>
              <p className="footer__contact__text">
                Besh og`och, Furqat ko`chasi, Toshkent
              </p>
            </li>
          </ul>
  )
}

export default FooterContact