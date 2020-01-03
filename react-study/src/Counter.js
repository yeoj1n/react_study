import React, { Component } from 'react'

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
        <div>
        
        </div>
    );
};
class Counter extends Component {
    state = {
        number : 0,
        error: false
    }

    // constructor : 컴포넌트 생성자로 컴포넌트가 새로 만들어질 때마다 생성
    constructor(props) {
        console.log('constructor')
        super(props)
    }
    
    // 컴포넌트가 화면에 나타나게 됐을 때 호출되는 API
    componentDidMount() {
        // 외부 라이브러리 연동: D3, masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
        // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
        console.log('componentDidMount');
    }

    // render 를 원하지 않는 경우 사용
    // 기본적으로 true를 반환하며 조건을 설정하여 false 를 반환하면 해당 조건에서는
    // render 함수를 호출하지않는다. 
    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음 (화면의 number 바뀌지않음)
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }
    
    // shouldComponentUpdate에서 true 가 반환된 후 사용 ( v16.3 이후 deprecate --> getSnapshotBeforeUpdate로 대체 )
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('getSnapshotBeforeUpdate');
    // }
      
    // render() 호출한 다음에 발생 : this.props와 this.state가 바뀌어있다.
    // 이전의 값인 prevProps 와 prevState 를 조회할 수 있다.
    componentDidUpdate(prevProps, prevState) {
       console.log('componentDidUpdate');
    }
    
    // 에러 발생시 실행된다. 컴포넌트 자신의 render 함수에서 에러가 발생하는 것을 잡지는 못하지만 
    // 컴포넌트의 자식 컴포넌트 내부 발생 에러는 잡을 수 있다.
    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    handleIncrease = () => {
        //this.setState({number: this.state.number + 1});
        //this.setState((state) => ({number: state.number + 1}));
        this.setState(({number}) => ({number : number + 1}));
    }

    handleDecrease = () => {
        //this.setState({number: this.state.number - 1});
        //this.setState((state) => ({ number : state.number - 1}));
        this.setState(({number}) => ({number: number - 1}));
    }

    render() {
        if(this.state.error) return (<h1>에러발생</h1>);
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {this.state.number === 2 && <Problematic/>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter