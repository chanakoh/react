import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // npm i axios
  // fetch 를 npm i axios로 axios 설치해서 axios 코드로 변경하기
  // 30 분까지 실습 진행

  useEffect(() => {
    // 데이터 가져오기
    axios
      //데이터 가져오기
      .get("http://localhost:5000/api/todos") // 포트 번호 수정
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("에러입니다.", error));
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo[0]} className='todo-item'>
            {todo[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
