import React, {Component} from "react";
import PropTypes from "prop-types";
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}입니다.
                <br/>
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

// MyComponent.defaultProps = {
//     name : '기본 이름'
// };
//
// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired

// 이렇게 설정해 주면 name값은 무조건 문자열 형태로 전달해야 된다는 것을 의미
//app 컴포넌트에서 name값을 문자열이 아닌 숫자로 전달해보셈요
export default MyComponent;
