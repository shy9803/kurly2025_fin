import React from 'react';
import dummy from '../../data/bestrank.json'
import {Link} from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // 쇼핑카트 명


function Best_rank(props) {
  return (
    <>
      <article className='item_list'>
      <h3 className='itm_list_tit'>🏆실시간 인기 랭킹🏆</h3>
      <p className='itm_list_parag'>가장 인기있는 상품만 모아보세요!</p>
        <ul className='items rankitem'>
          {dummy.bestrank.map(brank => (
          <li key={brank.id}>
            <Link to='/' title='상품'>
            <div className='item_img'>
              <img src={`${process.env.PUBLIC_URL}/images/${brank.imgname}`} alt='' />
            </div>
            <button type='submit' className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='cartsave'>담기</span>
            </button>
            <div className="item_txt">
              <span className='ranknum'>{brank.id}</span>
              <p className="item_name">{brank.title}</p>
              <p>
                <span className="price_disc">{brank.sale}</span>
                <span className="price_now">{brank.price}</span>
              </p>
            </div>
            </Link>
          </li>))}
        </ul>
      </article>
    </>
  );
}

export default Best_rank;