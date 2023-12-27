import React, { useState } from 'react';

function AddCount() {
    const [count, setCount] = useState(0);
    const [imgCount, setImgCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const addImage = () => {
        setImgCount(imgCount + 1);
    }

    return (
       
        <div>
        <button onClick={increment}>숫자</button>
        <button onClick={addImage}>이미지</button>
            <h1>숫자: {count}</h1>
            {[...Array(imgCount)].map((_, index) => (
                <img key={index} src='logo192.png' alt={`logo-${index}`} />
            ))}
        </div>
    )
}

function Count() {
    return (
        <div>
            <AddCount />
        </div>
    )
}

export default Count;