// 클래스형 컴포넌트
/*
import React, { PureComponent } from 'react'

class MyName extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>안녕하세요. 이제부터 <b>{this.props.subject}</b>를 공부해봅시다.</div>
        )
    }
}

MyName.defaultProps = {
    subject: '리액트',
    name: '이름'
};

export default MyName
*/

// 함수형 컴포넌트
import React from 'react'

function MyName({subject}) {
    return (
        <div>안녕하세요. 이제부터 <b>{subject}</b>를 공부해봅시다.</div>
    )
}

MyName.defaultProps = {
    subject: '리액트',
    name: '이름'
};

export default MyName
