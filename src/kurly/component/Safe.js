import React from 'react';

function Safe(props) {
  return (
    <>
      <main className='cmenu'>
        <h3>알뜰쇼핑</h3>
        <img src={`${process.env.PUBLIC_URL}/images/cmenu3.jpg`} alt="알뜰쇼핑" />
      </main>
    </>
  );
}

export default Safe;