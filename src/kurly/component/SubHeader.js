import React from 'react';
import {Link} from 'react-router-dom';

function SubHeader(props) {
  return (
    <>
      <header className="sub_h">
        <div className="h_top">
          <h1>
            <Link to='/' title='메인으로 이동'>
              <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="컬리 로고"/>
            </Link>
          </h1>
          <nav className='lnb'>
            <ul>
              <li><Link to='/signup' title='회원가입'>회원가입</Link></li>
              <li><Link to='/login' title='로그인'>로그인</Link></li>
              <li><Link to='/customer' title='고객센터'>고객센터</Link></li>
            </ul>
          </nav>
        </div>
        <div className="h_bottom">
          <nav className='gnb'>
            <ul>
              <li><Link to='/new' title='신상품'>신상품</Link></li>
              <li><Link to='/best' title='베스트'>베스트</Link></li>
              <li><Link to='/safe' title='알뜰쇼핑'>알뜰쇼핑</Link></li>
              <li><Link to='/special' title='특가/혜택'>특가/혜택</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default SubHeader;