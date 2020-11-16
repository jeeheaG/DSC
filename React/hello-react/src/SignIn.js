import React,{ Component } from 'react';
//성별입력과 비밀번호 재확인하는 과정 만들기
class SignIn extends Component {
    state = {
        id: '',
        passwd: '',
        passwdR: '',
        username: '',
        birth: '',
        gender: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = () => {
        alert('회원가입을 축하합니다.\n아이디: '+this.state.id+'\n이름: '+this.state.username+'\n생년월일: '+this.state.birth+'\n성별: '+this.state.gender+'\n전회번호: '+this.state.phone);
        this.setState({
            id: '',
            passwd: '',
            passwdR: '',
            username: '',
            birth: '',
            gender: '',
            phone: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleSubmit();
        }
    }

    render(){
        return(
        <>
            <h1>회원가입</h1>
            <form>
            <input 
                type="text"
                name="id"
                value={this.state.id} 
                placeholder="아이디" 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}>
            </input><br />
            <input 
                type="password"
                name="passwd"
                value={this.state.passwd} 
                placeholder="비밀번호" 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}>
            </input><br />
            <input 
                type="password"
                name="passwdR"
                value={this.state.passwdR} 
                placeholder="비밀번호 재확인" 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}>
            </input><br />
            <input 
                type="text"
                name="username"
                value={this.state.username} 
                placeholder="이름" 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}>
            </input><br />
            <input 
                type="date"
                name="birth"
                value={this.state.birth} 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}>
            </input><br />
            {/* 성별 <select><option> */}
            <input 
                type="text"
                name="phone"
                value={this.state.phone} 
                placeholder="휴대전화('-'없이 입력)" 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}>
            </input>
            <button onClick={this.handleSubmit}>회원가입</button>
            </form>
        </>
        );
    }
}

export default SignIn;