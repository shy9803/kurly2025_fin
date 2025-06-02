import React from 'react';
import dummy from '../../data/familyfood.json';
import {Link} from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // 쇼핑카트 명

function Family_food(props) {
  return (
    <>
      <article className='item_list'>
        <h3 className='itm_list_tit'>🍖간편하게 준비하는 가족 밥상</h3>
        <p className='itm_list_parag'>아이부터 어른까지 남녀노소 취향 저격!</p>
        <ul className='items'>
          {dummy.familyfood.map(fmfoodlist => (
          <li key={fmfoodlist.id}>
            <Link to='/' title='상품'>
            <div className='item_img'>
              <img src={`${process.env.PUBLIC_URL}/images/${fmfoodlist.imgname}`} alt='상품사진' />
            </div>
            <button type='submit' className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='cartsave'>담기</span>
            </button>
            <div className="item_txt">
              <p className="item_name">{fmfoodlist.title}</p>
              <s className="price_orig">{fmfoodlist.oprice}</s>
              <p>
                <span className="price_disc">{fmfoodlist.sale}</span>
                <span className="price_now">{fmfoodlist.price}</span>
              </p>
            </div>
            </Link>
          </li>))}
        </ul>
      </article>
    </>
  );
}

export default Family_food;