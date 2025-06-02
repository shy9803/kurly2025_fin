import React from 'react';
import {Link} from 'react-router-dom';
import List from './Main_list';
import Filter from './Sub_Filter';

function New(props) {
  return (
    <>
      <main className='cmenu'>
        <section>
          <h2>신상품</h2>
          <ul>
            <li><Link to='/' title='인기신상랭킹'>인기신상랭킹</Link></li>
            <li><Link to='/' title='제철신선'>제철신선</Link></li>
            <li><Link to='/' title='입점특가'>입점특가</Link></li>
            <li><Link to='/' title='요즘간식'>요즘간식</Link></li>
            <li><Link to='/' title='간편한끼'>간편한끼</Link></li>
            <li><Link to='/' title='주방 리빙'>주방&middot;리빙</Link></li>
            <li><Link to='/' title='뷰티'>뷰티</Link></li>
            <li><Link to='/' title='패션 잡화'>패션&middot;잡화</Link></li>
          </ul>
        </section>

        <section>
          <h2 className='none'>필터와 상품목록</h2>
          <article>
            <Filter />
          </article>
          <article>
            <List />
          </article>
        </section>

        {/* <img src={`${process.env.PUBLIC_URL}/images/cmenu1.jpg`} alt="신상품" /> */}
      </main>
    </>
  );
}

export default New;