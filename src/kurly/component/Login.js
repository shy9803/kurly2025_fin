import React, {useState} from 'react';

function Login(props) {
  let writeResult = '';

  const [name, setName] = useState(''); //초기값
  const [password, setPw] = useState(''); //초기값

  // 아이디, 비밀번호 저장 변수
  const OnIdValue = (id) => {
    setName(id.target.value);
  }
  const OnPwValue = (pw) => {
    setPw(pw.target.value);
  }

  // 공백 여부에 따른 출력
  if(name || password) {
    writeResult = <div className='writeResult'><p>아이디 입력결과 : {name}</p><p>패스워드 입력결과 : {password}</p></div>;
  } else {
    writeResult = '';
  }

  return (
    <>
      <form className='log_form'>
        <fieldset>
          <legend>로그인</legend>
          <div className='log_id'>
            <label for='id'>아이디</label>
            <input type='text' id='id' name='name' placeholder='아이디를 입력해주세요' value={name} onChange={OnIdValue} />
          </div>
          <div className='log_pw'>
            <label for='password'>비밀번호</label>
            <input type='password' id='password' name='password' placeholder='비밀번호를 입력해주세요' value={password} onChange={OnPwValue} />
          </div>
          <div className='log_search'>
            <a href='{}' title='아이디 찾기'>아이디 찾기</a>
            <a href='{}' title='비밀번호 찾기'>비밀번호 찾기</a>
          </div>
          <input type='button' value='로그인' id='login' />
          <input type='button' value='회원가입' id='signup' />
        </fieldset>

        {writeResult} {/* 입력결과 테스트 확인위치 */}
      </form>
    </>
  );
}

export default Login;