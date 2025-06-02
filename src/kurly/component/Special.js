import React from 'react';

function Special(props) {
  return (
    <>
      <main className='cmenu'>
        <h3>특가/혜택</h3>
        <img src={`${process.env.PUBLIC_URL}/images/cmenu4.jpg`} alt="특가/혜택" />
      </main>
    </>
  );
}

export default Special;