import React from 'react';

function Ran_banner(props) {
  // 이벤트 랜덤 배너
  // 이미지 배열
  const images = [
    '/images/banner1.png',
    '/images/banner2.png',
    '/images/banner3.png',
    '/images/banner4.jpg',
  ]

  // 랜덤으로 이미지 출력
  let randBan = Math.floor(Math.random() * images.length); //개수만큼 출력
  const ChoiceBan = images[randBan];

  return (
    <>
      <div className="ran_banner">
        <a href='/'>
          <img src={ChoiceBan} alt="배너" />
        </a>
      </div>
    </>
  );
}

export default Ran_banner;