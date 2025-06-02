import React from 'react';
import {Link} from 'react-router-dom';

// import Idx from '../KurlyIdx';

function Header(props) {
  return (
    <>
      <header>
        <h1>
          <Link to='/' title='메인으로 이동'>
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="컬리 로고"/>
          </Link>
        </h1>
      </header>
    </>
  );
}

export default Header;