import React, { Component } from 'react'

class MyName extends Component {
  // 가끔씩은 실수로 props 를 빠트려먹을때가 있습니다.
  // 혹은, 특정 상황에 props 를 일부러 비워야 할 때도 있구요.
  // 그러한 경우에, props 의 기본값을 설정해줄 수 있는데요, 그것이 바로 defaultProps 입니다.
  static defaultProps = {
    name: '기본이름'
  }
  render () {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
      </div>
    )
  }
}

// 함수형 컴포넌트와 클래스형 컴포넌트의 주요 차이점은, state 와 LifeCycle 이 빠져있다는 점입니다.
export const FunctionalMyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 <b>{name}</b>입니다.
    </div>
  )
}

export default MyName
