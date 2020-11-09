import React, { Fragment, useState, useRef } from 'react';
//import logo from './logo.svg';
//import './App.css';

function App() {
  const [inputs, setInputs] = useState({ //inputs객체 생성해둠
    id: '',
    password: '',
    myname: '',
    date: '',
    gender: ''
});

const onChange = (e) => {
  const nextInputs = {
    ...inputs,
    [e.target.name]: e.target.value
  };
  setInputs(nextInputs);
};

const onRegist = (e) => {
  alert('이름 : '+inputs.myname+'\n아이디 : '+inputs.id+'\n비밀번호 : '+inputs.password+'\n날짜 : '+inputs.date+'\n성별 : '+inputs.gender);
  setInputs({
    id: '',
    password: '',
    myname: '',
    date: '',
    gender: ''
  });
};

  return (
    <>
      <div>
            <input 
                name="id" 
                placeholder="아이디" 
                onChange={onChange} 
                value={inputs.id}/><br />
            <input 
                name="password" 
                placeholder="비밀번호" 
                onChange={onChange} 
                value={inputs.password} /><br />
            <input 
                name="myname" 
                placeholder="이름" 
                onChange={onChange} 
                value={inputs.myname}/><br />
            <input 
                type="date"
                name="date"
                placeholder="날짜" 
                onChange={onChange} 
                value={inputs.date}/><br />
            <select name="gender" onChange={onChange}>
              <option value="여">여</option>
              <option value="남">남</option>
            </select>
            <button onClick={onRegist}>가입하기</button>
        </div>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
