import React,{useState,useEffect} from "react";

function Timer(){
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        document.title = `${count}`;
    });
    //위 버튼 클릭과 const increment로 작성해준 메서드는 동일한 효능을 지닌다.
    return(
        <div>
        <p>{count}</p>
        <button
            onClick={increment}
    
    >Click</button>
    </div>
)
}
export default Timer;