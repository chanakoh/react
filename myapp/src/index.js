import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Count from './js/Count';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImgChange from'./js/ImgChange';
import ObjectExample from'./js/ObjectExample';
import Animal from './js/Animal';
import TimerCount from './js/TimerCount';
import PracticeTwo from './js/PracticeTwo';
import ChildComponent from './js/ChildComponent';
import ParentComponent from './js/ParentComponent';
import Board from './js/Board';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/*<Count /> //react에서 주석은 {/**/}
    {/*<ToggleButton />*/}
    {/*<IndexExample/>*/}
    {/*<ImgChange/>*/}
    {/*<ObjectExample/>  */}
    {/*<Animal/>  */}
    {/*<TimerCount/>*/}
   {/* <PracticeTwo/> */}
   <Board/>
   {/* <ParentComponent/> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//React.StrictMode> : react내부에서 잠재적인 문제가 있는지 알아내기 위한 도구
//reportWebVitals : react 성능 측정하기 위한 메서드