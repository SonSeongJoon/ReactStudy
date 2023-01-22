/* import React, {Component} from "react";

class EventPractice extends Component {

    state = {
        username: '',
        message: ''
    }
    // onchange와 onClick에 전달한 함수를 따로 빼내서 컴포넌트 임의 메서드를 만들어봄
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
        // 함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가
        // 특정 html 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져버립니다.
        // 이 때문에 임의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신으로 제대로 가리키기
        // 위해서는 메서드를 this와 바인딩(binding)하는 작업이 필요하다.
        // 만약 바인딩하지 않으면 this가 undefined를 가리키게 됩니다.

    // 하지만 새 메서드를 만들 때마다 constructor도 수정해야 하기 때문에
    // 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="성명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />

                <input
                    type="text"
                    name="message"
                    placeholder="나이"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}
*/


import React, {useState} from "react";

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChageMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ': ' + message);
        setUsername('');
        setMessage('')
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChageMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}
export default EventPractice;