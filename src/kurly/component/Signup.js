import React from 'react';

function Signup(props) {
  return (
    <>
      <form className='sign_form'>
        <filedset>
          <legend>회원가입</legend>
          <p><span class='impt'>*</span> 필수입력사항</p>

          <div>
            <label for='id'>아이디<span class='impt'>*</span></label>
            <input type='text' name='log_id' id='id' placeholder='아이디를 입력해주세요' />
          </div>
          <div>
            <label for='password'>비밀번호<span class='impt'>*</span></label>
            <input type='password' name='log_password' id='password' placeholder='비밀번호를 입력해주세요' />
          </div>
          <div>
            <label for='password_conf'>비밀번호 확인<span class='impt'>*</span></label>
            <input type='password' name='log_password_conf' id='password_conf' placeholder='비밀번호를 한번 더 입력해주세요' />
          </div>
          <div>
            <label for='username'>이름<span class='impt'>*</span></label>
            <input type='text' name='log_name' id='username' placeholder='이름을 입력해주세요' />
          </div>
          <div>
            <label for='email'>이메일<span class='impt'>*</span></label>
            <input type='text' name='log_email' id='email' placeholder='예:marketkurly' />
            <span>@</span>
            <select value='선택'>
              <option value=''>선택하기</option>
              <option value='naver.com'>naver.com</option>
              <option value='gmail.com'>gmail.com</option>
              <option value='hanmail.net'>hanmail.net</option>
              <option value='kakao.com'>kakao.com</option>
              <option value='daum.net'>daum.net</option>
              <option value='hotmail.com'>hotmail.com</option>
              <option value='yahoo.co.kr'>yahoo.co.kr</option>
              <option value=''>직접 입력</option> {/* 클릭시 빈칸 */}
            </select>
          </div>
          <div>
            <label for='phone'>휴대폰<span class='impt'>*</span></label>
            <input type='text' name='log_phone' id='phone' placeholder='숫자만 입력해주세요.' />
          </div>
          <div>
            <label for='region'>주소<span class='impt'>*</span></label>
            <input type='text' name='log_region' id='region' placeholder='주소 검색' />
            <span>배송지에 따라 상품 정보가 달라질 수 있습니다.</span>
          </div>
          <div>
            <label for='gender'>성별</label>
            <input type='radio' name='gender' /> 남자
            <input type='radio' name='gender' /> 여자
            <input type='radio' name='gender' /> 선택안함
          </div>
          <div>
            <label for='birth'>생년월일</label>
            <input type='text' placeholder='YYYY/MM/DD' id='birth' />
          </div>
          <div>
            <label for='add'>추가입력 사항</label>
            <input type='radio' name='gender' /> 친구초대 추천인 아이디
          </div>

          <hr />
          <div>
            <label for='agree'>이용약관동의<span class='impt'>*</span></label>
            <input type='radio' name='agree' /> 전체 동의합니다.
          </div>
        </filedset>
      </form>
    </>
  );
}

export default Signup;