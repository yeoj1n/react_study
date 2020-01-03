import React, { PureComponent } from 'react'

class MyName extends PureComponent {

    render() {
        return (
            <div>안녕하세요. 이제부터 <b>{this.props.subject}</b>를 공부해봅시다.</div>
        )
    }
}

export default MyName