import React from 'react';
//파일 연결
import Header from './component/Header';
import Login from './component/Login';
//서식 연결
import '../css/Header.css';
import '../css/LoginForm.css';

function KurlyLogin(props) {
  return (
    <>
      <Header />

      <Login />
    </>
  );
}

export default KurlyLogin;