import React from 'react';
import Maintab from './Main_tab'; //파일 연결
import Mainlist from './Main_list'; //파일 연결
import Mainslide from './Main_slide'; //파일 연결
import Ranbanner from './Ran_banner'; //파일 연결
import FamilyFood from './Family_food'; //파일 연결
import BestSeller from './Best_seller'; //파일 연결
import BestRank from './Best_rank'; //파일 연결

function Main(props) {
  return (
    <>
      <main>
        {/* 1. 메인 슬라이드 컴포넌트 */}
        <Mainslide />

        {/* 2. 이 상품 어때요? 컴포넌트 (=MD 추천) */}
        <section className="recommend">
          <h2 className="md_item">MD의 추천</h2>
          <Maintab />
          <Mainlist />
        </section>

        {/* 3. 간편하게 즐기는 가족밥상 */}
        <FamilyFood />

        {/* 4. 가정의달 선물 베스트셀러 */}
        <BestSeller />

        {/* 5. 실시간 인기 랭킹 (20250507 15시 기준) */}
        <BestRank />
        
        <section className="random_banner">
          <Ranbanner />
        </section>
      </main>
    </>
  );
}

export default Main;