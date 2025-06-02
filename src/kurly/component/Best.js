import React from 'react';

function Best(props) {
  return (
    <>
      <main className='cmenu'>
        <h3>베스트</h3>
        <img src={`${process.env.PUBLIC_URL}/images/cmenu2.jpg`} alt="베스트" />
      </main>
    </>
  );
}

export default Best;