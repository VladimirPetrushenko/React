import React, { useState, useEffect } from 'react';

function Clicker() {
    const [count, setCount] = useState(0);
    const [isStart, setStart] = useState(false);
    const [isReset, setReset] = useState(false);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    const Start = () =>{
        setStart(!isStart);
    }
    const Reset = () =>{
        setReset(true);
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            setCount((prevCount)=>prevCount+1);
        }, 1000);
        if(!isStart)
            clearInterval(interval);
        if(isReset){
            setCount(0);
            clearInterval(interval);
            setReset(false);
        }

        return () => clearInterval(interval);
    },[isStart, isReset, count]);

    return (
        <div className="Clicker">
            {
                isStart ? 
                <button onClick={Start}>Stop</button> :
                <button onClick={Start}>Start</button>
            }
            <span style={{ display: 'inline-block', margin: '0 22px' }}>
                {count}
            </span>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default Clicker;
