import logo from './logo.svg';
import './App.css';
//js에서는 글자값인지 숫자값인지 중요하지 않음
//재사용이 가능한지 재할당이 가능한지 가 중요
//var : 재할당 재선언 가능 // 밑에서 안된 error코드 모두 가능
//let : 재선언은 하지 못하지만 자할당 가능
let count = 0;
count = 1;
//const" 재산안, 재할당 둘다 불가 // 한번 선언하면 다시 값을 변경하거나 수정할 수 없음
const msg = "hihi";
//msg = "aa"; //msg에 다른값을 넣고싶어서 추가로 값변경을하려하면 error발생함
funtion HiComponent(){
  return{
    <div>
    <h1>{msg}</h1>_
    <p>이것은 h1 컴토넌트입니다.</p>
    </div>
  }
}
function App() {
  msg
  return (
    <div className="App">
      <h1>안녕 React</h1>
      <p>이것은 Recat JS입니다.</p>
      <h2>{msg}</h2>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
//export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
//기본적으로 내보낸 항목을 지정하는 역할을 함
//다른 Js에서 App.js에 있는 funtion App을 사용할 수 있도록 내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함
