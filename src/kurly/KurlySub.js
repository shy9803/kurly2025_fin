import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// 파일 연결
import SubHeader from './component/SubHeader'; //서브 헤더
import IdxMain from './component/Main'; //메인화면
import SignUp from './component/Signup'; //회원가입
import Login from './component/Login'; //로그인
import New from './component/New'; //신상품
import Best from './component/Best'; //베스트
import Safe from './component/Safe'; //알뜰쇼핑
import Special from './component/Special'; //특가/혜택
import NotFound from './NotFound'; //페이지 없음
import Footer from './component/Footer'; //푸터

// 서식 연결
import '../css/SubHeader.css';
import '../css/CMenu.css';
import '../css/LoginForm.css';
import '../css/Main.css';
import '../css/Footer.css';

function KurlySub(props) {
  return (
    <>
    <BrowserRouter>
      <SubHeader />

      <Routes>
        <Route path='/' element={<IdxMain />} />
        <Route path='/new' element={<New />} />
        <Route path='/best' element={<Best />} />
        <Route path='/safe' element={<Safe />} />
        <Route path='/special' element={<Special />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  );
}

export default KurlySub;