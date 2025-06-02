import React from 'react';
import Header from './component/Header'; //파일 연결
import Main from './component/Main'; //파일 연결
import Footer from './component/Footer'; //파일 연결

import '../css/Header.css';
import '../css/Main.css';
import '../css/Footer.css';

function Kully(props) {
  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  );
}

export default Kully;