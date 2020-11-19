import React, { Component } from 'react'

class LifeCycleAPI extends Component {
  // -------------------- 컴포넌트 초기 생성 --------------------

  // 컴포넌트 생성자 함수입니다. 컴포넌트가 새로 만들어질 때마다 이 함수가 호출됩니다.
  constructor (props) {
    super(props)
    this.state = {}
  }

  // Deprecated API
  // componentWillMount () {}

  // 컴포넌트가 화면에 나타나게 됐을 때 호출됩니다.
  componentDidMount () {
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
  }

  // -------------------- 컴포넌트 업데이트 --------------------

  // Deprecated API
  // componentWillReceiveProps () {}

  // 이 함수는, v16.3 이후에 만들어진 라이프사이클 API 인데요,
  // 이 API 는 props 로 받아온 값을 state 로 동기화 하는 작업을 해줘야 하는 경우에 사용됩니다.
  static getDerivedStateFromProps (nextProps, prevState) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    /*
    if (nextProps.value !== prevState.value) {
        return { value: nextProps.value };
    }
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
    */
  }

  // cpu 최적화 작업을 해야할 때 사용자 지정으로 업데이트 포인트를 정의해줍니다.
  shouldComponentUpdate (nextProps, nextState) {
    // return false 하면 업데이트를 안함
    // return this.props.checked !== nextProps.checked
    return true
  }

  // Deprecated API
  // componentWillUpdate () {}

  // 이 API 가 발생하는 시점은 다음과 같습니다.
  // 1. render()
  // 2. getSnapshotBeforeUpdate()
  // 3. 실제 DOM 에 변화 발생
  // 4. componentDidUpdate
  // 이 API를 통해서, DOM 변화가 일어나기 직전의 DOM 상태를 가져오고,
  // 여기서 리턴하는 값은 componentDidUpdate 에서 3번째 파라미터로 받아올 수 있게 됩니다.
  getSnapshotBeforeUpdate (prevProps, prevState) {
    // DOM 업데이트가 일어나기 직전의 시점입니다.
    // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
    // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
    // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데,
    // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
    if (prevState.array !== this.state.array) {
      const { scrollTop, scrollHeight } = this.list

      // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
      return {
        scrollTop,
        scrollHeight
      }
    }
  }

  // 이 API는 컴포넌트에서 render() 를 호출하고난 다음에 발생하게 됩니다.
  // 이 시점에선 this.props 와 this.state 가 바뀌어있습니다.
  // 그리고 파라미터를 통해 이전의 값인 prevProps 와 prevState 를 조회 할 수 있습니다.
  // 그리고, getSnapshotBeforeUpdate 에서 반환한 snapshot 값은 세번째 값으로 받아옵니다.
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (snapshot) {
      const { scrollTop } = this.list
      // 기능이 이미 구현되어있다면 처리하지 않습니다.
      if (scrollTop !== snapshot.scrollTop) return
      const diff = this.list.scrollHeight - snapshot.scrollHeight
      this.list.scrollTop += diff
    }
  }

  // -------------------- 컴포넌트 제거 --------------------

  // 컴포넌트가 더 이상 필요하지 않게 되면 단 하나의 API 가 호출됩니다.
  componentWillUnmount () {
    // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
  }

  // -------------------- 에러 핸들링 --------------------

  // 컴포넌트 자신의 render 함수에서 에러가 발생해버리는것은 잡아낼 수는 없지만,
  // 그 대신에 컴포넌트의 자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있습니다.
  componentDidCatch (error, info) {
    // 에러가 발생하면 이런식으로 componentDidCatch가 실행되게 하고,
    // state.error 를 true 로 설정하게 하고, render 함수쪽에서 이에 따라 에러를 띄워주시면 됩니다.
    this.setState({
      error: true
    })
  }

  render () {
    if (this.state.error) return <h1>에러 발생!!</h1>
    return <div>라이프 사이클 테스트</div>
  }
}

export default LifeCycleAPI
