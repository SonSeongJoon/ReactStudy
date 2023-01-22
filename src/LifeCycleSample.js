import React, {Component} from "react";
/* props는 부모에게 받아온 데이터입니다.
리액트는 data flow는 단방향 형식으로 부모에서부터 자식으로 이동하기 때문에 거꾸로 올라갈 수 없습니다.
따라서 props에 있는 데이터들은 수정이 불가능하며 오직 안에있는 값을 꺼내서
사용할 수만 있습니다.


*/
class LifeCycleSample extends Component {
    state = {
        number:0,
        color:null
    }

    myRef = null; // ref를 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor');
    }
    // props로 받아 온 값을 state에 동기화시키는 용도로 사용하며, 컴포넌트가 마운트
    //될 때와 업데이트될 때 호출된다.
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }

        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);

        return nextState.number % 10 !==4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }

}
export default LifeCycleSample;