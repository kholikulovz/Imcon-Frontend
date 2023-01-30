import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// import images
import Cancel from "../../Assets/images/cancel.svg";

function Modal({ active }) {
  let modal = useRef();
  let btns = useRef();
//   const [disable, setDisable] = useState(false)
  return (
    <>
      <div className={!active ? "modal" : "modal modal--active"} ref={modal}>
        <button
          className="modal__close"
        //   onClick={()=> {!active ? modal.current.classList.remove('modal--active') : "modal"}}
        >
          <Image
            className="modal__cancel"
            src={Cancel}
            alt="cancel-img"
            width={24}
            height={24}
          />
        </button>
        <div className="modal__btngroup" ref={btns}>
          <button className="modal__lang" disabled={false}>
            Eng
          </button>
          <button className="modal__lang" disabled={true}>
            O'zb
          </button>
          <button className="modal__lang" disabled={true}>
            Rus
          </button>
        </div>
        <ul className="modal__menu">
          <li className="modal__item">
            <Link className="modal__link" href="#">
              Company
            </Link>
          </li>
          <li className="modal__item">
            <Link className="modal__link" href="#">
              Services
            </Link>
          </li>
          <li className="modal__item">
            <Link className="modal__link" href="#">
              Portfolio
            </Link>
          </li>
          <li className="modal__item">
            <Link className="modal__link" href="#">
              Careers
            </Link>
          </li>
          <li className="modal__item">
            <Link className="modal__link" href="#">
              Contact
            </Link>
          </li>
        </ul>
        <Link className="modal__phone" href={"tel:+998901234567"}>
          +998 90 123-45-67
        </Link>
      </div>
    </>
  );
}

export default Modal;
