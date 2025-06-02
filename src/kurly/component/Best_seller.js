import React from 'react';
import dummy from '../../data/bestseller.json';
import {Link} from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // 쇼핑카트 명


function Best_seller(props) {
  return (
    <>
      <article className='item_list'>
        <h3 className='itm_list_tit'>💝가정의달 선물 베스트셀러</h3>
        <p className='itm_list_parag'>정관장부터 설화수까지, &#126;76&#37;할인 중!</p>
        <ul className='items'>
          {dummy.bestseller.map(bsell => (
          <li key={bsell.id}>
            <Link to='/' title='상품'>
            <div className='item_img'>
              <img src={`${process.env.PUBLIC_URL}/images/${bsell.imgname}`} alt='' />
            </div>
            <button type='submit' className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='cartsave'>담기</span>
            </button>
            <div className="item_txt">
              <p className="item_name">{bsell.title}</p>
              <s className="price_orig">{bsell.oprice}</s>
              <p>
                <span className="price_disc">{bsell.sale}</span>
                <span className="price_now">{bsell.price}</span>
              </p>
            </div>
            </Link>
          </li>))}
        </ul>
      </article>
    </>
  );
}

export default Best_seller;