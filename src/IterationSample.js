import React, {useState} from "react";
// MAP함수
/* 자바스크립트 배열 객체의 내장 함수인 map함수를 사용하여 반복되는 컴포넌트를 렌더링할 수 있습니다.
* arr.map(callback, [thisArg]
* callback: 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지입니다.
* - currentValue: 현재 처리하고 있는 요소
* - index: 현재 처리하고 있는 요소의 index값
* - array: 현재 처리하고 있는 원본 배열*/
const IterationSample = () => {
    // const names = ['눈사람', '얼음', '눈', '바람'];
    // const nameList = names.map(name=> <li>{name}</li>);
    // return <ul>{nameList}</ul>
    const [names, setNames] = useState([
        {id : 1, text: '눈사람'},
        {id : 2, text: '얼음'},
        {id : 3, text: '눈'},
        {id : 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
    }
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId, //nexId 값을 id을 설정하고
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames); // names 값을 업데이트한다.
        setInputText(''); // inputText를 비운다.
    }
    const onRemove = id => {
        const nextNames = names.filter(name=> name.id != id);
        setNames(nextNames);
    }
    // onClick함수에서 새로운 항목을 추가할 때 객체의 id값은 nextId를 사용하도록 하고,
    // 클릭될 때마다 값이 1씩 올라가도록 구현했습니다.


    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return (
        <>
        <input value={inputText} onChange={onChange} onKeyPress={handleKeyPress}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );
};
// 버튼을 클릭했을 때 호출할 onClick 함수를 선언하여 버튼의 onClick이벤트로 설정해 보세요.
// onClick 함수에서는 배열의 내장 함수 concat을 사용하여 새로운 항목을 추가한 배열을 만들고,
// setNames를 통해 상태를 업데이트해 줍니다.
export default IterationSample;

// key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용합니다.
// 예를 들어 유동적인 데이터를 다룰 때는 원소를 새로 생성할 수도,
// 제거할 수도, 수정할 수도 있죠.

/*
컴포넌트는 다음과 같은 총 네 가지 경우에 업데이트해야 한다.
1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때
 */