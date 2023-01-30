import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import Images
import Logo from '../../Assets/images/imcon-logo.svg';
import Bar from '../../Assets/images/bar.svg';
import Modal from './modal';
import HeaderNav from './headerNav';

function Header() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="header__component">
      <div className="container">
        <nav className="header__nav">
          <Image className='header__logo' src={Logo} alt="logo" width={123} height={115} />
          <HeaderNav/>
          <div className="header__wrapper">
            <Link className='header__phone' href={'tel:+998901234567'}>+998 90 123-45-67</Link>
          <select name="lang-select" id="lang-select" className='header__select'>
            <option value="Eng">Eng</option>
            <option value="Ru">Ru</option>
          </select>
          </div>
          <button className='header__bar__btn' onClick={() => setIsActive(prev => !prev)} >
          <Image className='header__bar' src={Bar} alt="logo" width={24} height={24} />
          </button>
        <Modal active={isActive} setActive={setIsActive}/>
        </nav>
      </div>
    </div>
  );
}

export default Header;
