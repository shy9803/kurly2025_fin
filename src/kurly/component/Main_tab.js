import React from 'react';
import {Link} from 'react-router-dom';

function Main_tab(props) {
  return (
    <>
      {/* 탭 메뉴 */}
      <ul className="item_tab">
        <li><Link to="/" title="채소">채소</Link></li>
        <li><Link to="/" title="과일 견과 쌀">과일&middot;견과&middot;쌀</Link></li>
        <li><Link to="/" title="수산 해산 건어물">수산&middot;해산&middot;건어물</Link></li>
        <li><Link to="/" title="정육 계란">정육&middot;계란</Link></li>
        <li><Link to="/" title="국 반찬 메인요리">국&middot;반찬&middot;메인요리</Link></li>
        <li><Link to="/" title="샐러드 간편식">샐러드&middot;간편식</Link></li>
        <li><Link to="/" title="면 양념 오일">면&middot;양념&middot;오일</Link></li>
        <li><Link to="/" title="생수 음료 우유 커피">생수&middot;음료&middot;우유&middot;커피</Link></li>
        <li><Link to="/" title="간식 과자 떡">간식&middot;과자&middot;떡</Link></li>
        <li><Link to="/" title="베이커리 치즈 델리">베이커리&middot;치즈&middot;델리</Link></li>
        <li><Link to="/" title="건강식품">건강식품</Link></li>
        <li><Link to="/" title="와인">와인</Link></li>
        <li><Link to="/" title="전통주">전통주</Link></li>
        <li><Link to="/" title="생활용품 리빙 캠핑">생활용품&middot;리빙&middot;캠핑</Link></li>
        <li><Link to="/" title="스킨케어 메이크업">스킨케어&middot;메이크업</Link></li>
        <li><Link to="/" title="헤어 바디 구강">헤어&middot;바디&middot;구강</Link></li>
        <li><Link to="/" title="주방용품">주방용품</Link></li>
        <li><Link to="/" title="가전제품">가전제품</Link></li>
        <li className="itm_act"><Link to="/" title="선물하기">선물하기</Link></li>
        <li><Link to="/" title="반려동물">반려동물</Link></li>
        <li><Link to="/" title="베이비 키즈 완구">베이비&middot;키즈&middot; 완구</Link></li>
      </ul>
    </>
  );
}

export default Main_tab;