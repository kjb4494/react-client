import React, { Component } from 'react'

class Counter extends Component {
  // state는 편의성을 위해 class fields 문법을 사용합니다.
  state = {
    number: 0,
    foo: {
      bar: 4,
      foobar: 1
    }
  }

  // 만약 class fields 문법을 사용하지 않으면 다음과 같이 표현됩니다.
  //   constructor (props) {
  //     super(props)
  //     this.state = {
  //       number: 0
  //     }
  //   }

  // 화살표 함수
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // 구조 분해 할당으로 표현
  handleDecrease = () => {
    this.setState(({ number }) => ({
      number: number - 1
    }))
  }

  handleFoobar = () => {
    // number은 그대로, foo객체만 바뀝니다.
    // ...this.state.foo를 해주지않으면 foo객체 자체가 치환되어 버립니다. (주의!)
    this.setState(({ foo, foo: { foobar } }) => ({
      foo: {
        ...foo,
        foobar: foobar + 1
      }
    }))
  }

  // 일반 함수로 표현하면 나중에 버튼에서 클릭 이벤트가 발생 했을 때,
  // this가 undefined로 나타나서 제대로 처리되지 않게 됩니다.
  // 이는 함수가 버튼의 클릭이벤트로 전달이 되는 과정에서 this와의 연결이 끊겨버리기 때문입니다.
  // 따라서 화살표 함수를 사용하지 않았을 경우 constructor에서 bind를 해줘야 합니다.
  //   constructor (props) {
  //     super(props)
  //     this.handleIncrease = this.handleIncrease.bind(this)
  //     this.handleDecrease = this.handleDecrease.bind(this)
  //   }

  //   handleIncrease () {
  //     this.setState({
  //       number: this.state.number + 1
  //     })
  //   }

  //   handleDecrease () {
  //     this.setState({
  //       number: this.state.number - 1
  //     })
  //   }

  render () {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        {/* 이벤트이름을 설정 할 때 camelCase로 설정해주어야 합니다. */}
        {/* onclick은 onClick, onmousedown은 onMouseDown, onchange는 onChange 이런식으로 말이죠. */}
        {/* 이벤트에 전달해주는 값은 함수여야 합니다.  */}
        {/* 만약에 onClick={this.handleIncrease()} 이런식으로 하게 된다면, */}
        {/* 렌더링을 할 때 마다 해당 함수가 호출이됩니다. */}
        {/* 그렇게 되면 정말 큰 일이 발생합니다. */}
        {/* 렌더링 -> 함수 호출 -> setState -> 렌더링 -> 함수 호출 -> 무한반복.. 이렇게 되버리는 것이죠! */}
        {/* 그러니까 꼭 주의하셔야 합니다. 렌더링 함수에서 이벤트를 설정 할 때 여러분이 만든 메소드를 호출하지 마세요! */}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <div>bar: {this.state.foo.bar}</div>
        <div>foobar: {this.state.foo.foobar}</div>
        <button onClick={this.handleFoobar}>Foobar Test</button>
      </div>
    )
  }
}

export default Counter
