import React, {useState,useMemo,useCallback,useRef} from "react";

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a+b); //누적값 + 현재값
    return sum / numbers.length;
};
// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => {return 결과}, 초깃값);
const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);
    // useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의
    // current 값이 실제 엘리먼트를 가리킵니다.

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);
    // 비어 있는 배열을 넣게 되면 컴포넌트가 렌더링될 때 만들었던 함수를 계속해서
    // 재사용하게 되며, onInsert 처럼 배열 안에 number, list를 넣게 되면
    // 인풋 내용이 바뀌거나 새로운 항목이 추가될 때 새로 만들어진 함수를 사용하게 됩니다.

    // 기존의 number와 list를 조회해서 nextList를 생성하기 때문에 배열 안에
    // number와 list를 꼭 넣어 주어야 합니다.

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        // 기존 배열은 변경되지 않는다
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);

    return (
      <div>
          <input value={number} onChange={onChange} ref={inputEl} />
          <button onClick={onInsert}>등록</button>
          <ul>
              {list.map((value, index) => (
                  <li key={index}>{value}</li>
              ))}
          </ul>
          <div>
              <b>평균값:</b> {avg}
          </div>

      </div>
    );
};

export default Average;