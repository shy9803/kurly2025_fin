import React from 'react';
import {Link} from 'react-router-dom';
import dummy from "../../data/mdrecommend.json";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // 쇼핑카트 명

function Main_list(props) {
  return (
    <>
      {/* 상품 목록 */}
      <article className="item_list">
        <h3 className='none'>MD의 추천 상품 목록</h3>
        <ul className="items">
          {dummy.mdrecom.map(mdrec => (
          <li key={mdrec.id}>
            <Link to="/" title="상품">
              <div className="item_img">
                <img src={`${process.env.PUBLIC_URL}/images/${mdrec.imgname}`} alt="상품사진" />
              </div>
              <button type='submit' className="cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className='cartsave'>담기</span>
              </button>
              <div className="item_txt">
                <p className="item_name">{mdrec.title}</p>
                <s className="price_orig">{mdrec.oprice}</s>
                <p>
                  <span className="price_disc">{mdrec.sale}</span>
                  <span className="price_now">{mdrec.price}</span>
                </p>
              </div>
            </Link>
          </li>))}
        </ul>
      </article>
    </>
  );
}

export default Main_list;