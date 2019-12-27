# 1. 리액트 프로젝트 시작하기

## 1.1 리액트란?

* 페이스북에서 개발하고 관리하는 UI 라이브러리
* UI 기능만 제공하기 때문에 전역 상태 관리, 라우팅, 빌드 시스템 등은 개발자가 직접 구축해야한다.
* 신경쓸 것들이 많아 진입장벽이 높은 편이므로 리액트 팀에서 create-react-app을 만들었다. (1-3에서 소개)


## 1.2 리액트 개발 환경 직접 구축하기

### 1-2-1. 외부 패키지를 활용하지 않고 리액트로 간단한 웹 페이지 만들어보기
hello-world-project 폴더를 생성하고 아래 두 파일을 생성한다.

#### simple1.html
-> 리액트에서 사용할 DOM요소와 필요한 js 파일들을 정의한다.

```
<html>
	<body>
		<h1>안녕하세요. 이 프로젝트가 마음에 드시면 좋아요 버튼을 눌러주세요.</h1>
		<div id='react-root'></div>
		<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
		<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
		<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
		<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
		<script src="simple1.js"></script>
	</body>
</html>
```

#### simple1.js
-> '좋아요' 버튼을 보여주고 '좋아요' 버튼을 누르면 '좋아요 취소' 로 버튼 상태가 변경되도록 한다.

```
class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {liked : false};
		
	}
	
	render() {
		const text = this.state.liked ? '좋아요 취소' : '좋아요';
		return React.createElement (
			'button', 
			{onClick: () => this.setState({liked : true})},
			text,
		);
	}
}
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(LikeButton), domContainer);
```

### createElement 이해하기 
대부분은 JSX문법을 사용하기 때문에 개발자가 createElement를 사용하는 일은 없다. 보통은 JSX 문법으로 작성 후 바벨을 이용하여 createElement 함수로 변환해 사용한다.

#### React.createElement (component, props, children) => ReactElement
* component : 일반적으로 문자열 또는 리액트 컴포넌트 (문자열인 경우 HTML 태그에 해당하는 DOM요소가 생성됨)
* props : component 가 사용하는 data
* children : component 가 감싸고 있는 내부 component

### 1.2.2 바벨 사용해보기
바벨이란? JavaScript 코드를 변환해주는 컴파일러
https://babeljs.io/docs/en/

### 증가, 감소 시킬 수 있는 COUNT 애플리케이션 만들기
-> count.js, count.html 파일 생성

#### count.html 

```
<html>
	<body>
		<div id='react-root'></div>
		<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
		<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
		<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
		<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
		<script src="count.js"></script>
	</body>
</html>
```

#### (React.createElement)count.js

```
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    {style: {marginTop: 20}},
                    React.createElement('span', null, '현재 카운트 : '),
                    React.createElement('span', null, this.state.count),
                    React.createElement('br', null, null),
                    React.createElement('button', {onClick: () => this.setState({count : this.state.count + 1})}, '증가'),
                    React.createElement('button', {onClick: () => this.setState({count : this.state.count - 1})}, '감소')
                )
        );
    }
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);
```

#### (JSX 코드)count.js
(JSX 문법을 바로 사용할 수는 없으며 바벨로 컴파일 후 사용해야한다.)

```
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: 20 }}>
                    <span>
                        현재 카운트 : {this.state.count}
                    </span>
                    <button onClick={() => this.setState({count : this.state.count + 1})}> 
                        증가              
                    </button>
                    <button onClick={() => this.setState({count : this.state.count - 1})}>
                        감소
                    </button>
                </div>
            </div>
        );
    }
}
```


### 1.2.3 함수형 컴포넌트와 클래스형 컴포넌트 차이
state, 라이프사이클 API를 사용하지 않는 경우 함수형 컴포넌트를 사용한다. <br/>
렌더 함수만 필요한 경우 함수형 컴포넌트로 작성하는 것을 추천! (> 리액트 16에서는 함수형 컴포넌트의 성능이 조금 더 빨라졌다고 페이스북 개발자가 언급했다.)<br/>

기능적 측면 : 클래스형 컴포넌트 > 함수형 컴포넌트

## 1.3 create-react-app으로 시작하기
리액트로 웹 애플리케이션을 만들기 위한 환경을 제공

### 1.3.1 create-react-app 사용하기
1) crate-react-app을 이용한 개발환경 설치

``` 
npm install -g create-react-app
create-react-app cra-project
```

2) 실행

```
cd cra-project
npm start
```

localhost:3000 으로 접속시 create-react-app 이 실행된 것을 확인할 수 있다!

### 1.3.2 주요 명령어

* 실행
개발모드
``` npm start ```

테스트 모드
``` npm test ```

운영모드
``` npm run build ```



개발 모드로 실행 시 HMR(Hot Module Replacement)이 동작하여 코드가 수정되면 화면에 바로 반영된다.

* 빌드
``` npm run build ```

배포 환경에서 사용할 파일을 만들어준다. 빌드 후 생성된 js와 css 파일은 읽기 힘든 형식으로 압축 되어 있다.

* 테스트 코드 실행
``` npm test ```


* 설정 파일 추출
``` npm run eject ```

### 1.3.3 JavaScript 지원범위
* 지수 연산자
* async await 함수
* 나머지 연산자, 전개 연산자
* 동적 임포트
* 클래스 필드
* JSX 문법
* 타입스크립트, 플로 타입 시스템


