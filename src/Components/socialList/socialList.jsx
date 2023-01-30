import Link from "next/link";
import React from "react";

import Svg from "../../Assets/svg";

function SocialList() {
  return (
    <>
    <Svg/>
      <ul className="social__list footer__social__list">
        <li className="social__item">
          <Link href={'#'} className='social__link footer__social__link'>
          <svg className="social__icon" width={24} height={24}>
            <use xlinkHref="#twitter"></use>
          </svg>
          </Link>
        </li>
        <li className="social__item">
          <Link href={"#"} className="social__link footer__social__link">
          <svg className="social__icon" width={24} height={24}>
            <use xlinkHref="#instagram"></use>
          </svg>
          </Link>
        </li>
        <li className="social__item">
          <Link href={"#"} className="social__link footer__social__link">
          <svg className="social__icon" width={24} height={24}>
            <use xlinkHref="#telegram"></use>
          </svg>
          </Link>
        </li>
        <li className="social__item">
          <Link href={"#"} className="social__link footer__social__link">
          <svg className="social__icon" width={24} height={24}>
            <use xlinkHref="#facebook"></use>
          </svg>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default SocialList;
