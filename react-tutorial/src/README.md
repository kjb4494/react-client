### 리액트 튜토리얼
- [*누구든지 하는 리액트: 초심자를 위한 리액트 핵심 강좌*](https://velopert.com/3613)

### 리액트에서 자주 발생하는 에러
- 존재하지 않는 함수를 호출하려고 할 때 (예를들어서 props 로 받았을줄 알았던 함수가 전달되지 않았을때)
    ```javascript
    this.props.onClick();
    ```
- 배열이나 객체가 올 줄 알았는데, 해당 객체나 배열이 존재하지 않을 때
    ```javascript
    this.props.object.value; // object is undefined
    this.props.array.length; // array is undefined

    // 이러한 것들은 render 함수에서 다음과 같은 형식으로 막아 줄 수 있습니다.
    render() {
        if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;
        // object 나 array 를 사용하는 코드
    }

    // 또는 defaultProps를 사용합니다.
    class Sample extends Component {
        static defaultProps = {
            onIncrement: () => console.warn('onIncrement is not defined'),
            object: {},
            array: []
        }
    }
    ```
