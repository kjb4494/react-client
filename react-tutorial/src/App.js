import React, { Component, Fragment } from 'react'
// css import
import './App.css'
// 다른 컴포넌트를 가져옵니다.
import MyName, { FunctionalMyName } from './MyName'
import Counter from './Counter'

class App extends Component {
  render () {
    // JSX 에서 style과 CSS 클래스를 설정 할 때, html에서 하는 것과 사뭇 다릅니다.
    // 우선, style은 다음과 같이 작성 할 수 있습니다.
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    }

    // JSX 안에서 자바스크립트 값 사용하기
    // var는 사용하지않음! -> 변하는 값: let, 변하지않는 값: const (낮은 버전의 ie 호환X)
    const name = 'react'
    const value = 1
    return (
      // 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야 합니다.
      // 가장 간단한 방법은 <div>로 감싸는 것이지만, 스타일 관련 설정 등으로 인해 사용이 불가능하다면 <Fragment>를 사용해도 된다.
      <Fragment>
        <div>
          <input type='text'></input>
          {/* <br>은 그냥 썼던 html과 달리, 리액트에서 모든 태그는 꼭 닫혀있어야 합니다. */}
          <br></br>
          hello {name}!
        </div>
        <div>
          {/* 조건부 렌더링 -> 삼항연산자 */}
          {1 + 1 === 2 ? <div>맞아요!</div> : <div>틀려요!</div>}
          <br></br>
          {/* 조건부 렌더링 -> if문 */}
          {(function () {
            if (value === 1) {
              return <div>하나!</div>
            } else {
              return <div>하나가 아님!</div>
            }
          })()}
        </div>
        {/* style 적용하기 */}
        <div style={style}>안녕! style!</div>
        <br></br>
        {/* css 적용하기 */}
        {/* 리액트 컴포넌트에서는 class 대신에 className을 사용합니다. */}
        <div className='App'>리액트 css다!</div>
        <hr></hr>
        {/* 컴포넌트 사용하기 */}
        <MyName name='리액트' />
        {/* default Prop Test */}
        <MyName />
        <br></br>
        {/* state Test */}
        <FunctionalMyName name='함수형 컴포넌트' />
        <hr></hr>
        <Counter />
      </Fragment>
    )
  }
}

// 우리가 작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기를 해줍니다.
export default App
