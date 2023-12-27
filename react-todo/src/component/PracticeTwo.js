import React,  { useState, useEffect, useCallback } from "react";

function ExCallBack(){

}

function TodoList(){
    //할 일 목록 배열을 위한 state생성
    const[todos,setTodos]=useState([]);
    //할 일 추가하기 위한 input String state생성
    const[newTodo,setNewTodo] = useState('');
    //할일이 추가될 때마다 자동으로 할 일 갯수 추가해주는 count state 생성
    const [count,setCount] = useState(0);
    //할 일이 추가될 때 사용하는 함수
    const addTodo = ()=>{
        setTodos({...todos, newTodo});
        setNewTodo('');
        //할 일이 추가될 때 마다 count 증가
        setCount(count+1);
    }
    //할 일을 삭제하는 함수
    const removeTodo = (index)=> {
        const updateTodos = {...todos};
        updateTodos.splice(index,1);
        setTodos(updateTodos);
        setCount(count -1);
    };
    useEffect(()=> {
        document.title =  `할일 객수 : ${count}`;
    },[count]);

        return(
            <div>
                <h2>ToDoList</h2>
                <div>
                    <input
                    type="text"
                    value={newTodo}
                    onChange={(e)=>setNetTodo}
                    
                    />
                    <button onClick={addTodo}>추가하기/</button>
                </div>
            </div>
        );
};

function MiniApp(){
    return(
        <div>
        <ExCallBack/>
        <TodoList/>
        </div>
    )
}
export defalut MiniApp;