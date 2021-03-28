import React, {useEffect, useReducer } from 'react';

const countReduser = (state, action) =>{
    const {type} = action;
    if(type==='START'){
        return {
            ...state,
            isStart: true,
        }
    }
    if(type==='STOP'){
        return {
            ...state,
            isStart: false,
        }
    }
    if(type==='RESET'){
        return {
            ...state,
            count: 0,
            isStart: false,
        }
    }
    if(type==='TICK'){
        return {
            ...state,
            count: state.count+1,
        }
    }
    return state;
}

const get = (key) => {
    const local = localStorage.getItem(key);

    return local ? +local : 0;
}

export function Timer() {
    const[state, dispatch] = useReducer(countReduser, {count: get("countTimer"), isStart:false})

    useEffect(()=>{
        let interval = null
        if(state.isStart){
            interval = setInterval(() => {
                dispatch({type:"TICK"});
            }, 1000);
        }
        return  () => {
            state.isStart && clearInterval(interval);
            interval=null;
        }
    },[state.isStart]);

    useEffect(()=>{
        localStorage.setItem("countTimer", state.count);
    },[state.count]);
    return (
        <div className="Timer">
            {
                state.isStart ? 
                <button onClick={()=>dispatch({type:"STOP"})}>Stop</button> :
                <button onClick={()=>dispatch({type:"START"})}>Start</button>
            }
            <span style={{ display: 'inline-block', margin: '0 22px' }}>
                {state.count}
            </span>
            <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </div>
    );
}
