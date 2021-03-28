import React, {useReducer} from 'react'
import {FuncForReducer} from '../component/FuncForReducer'



export const Reducer = () =>{
    const[{r,g,b}, dispatch] = useReducer(FuncForReducer, {r:0, g:150, b:200});

    return <div className="Reducer">
            <h1 style={{
                color: `rgb(${r}, ${g}, ${b})`
            }}>
                Hello Reducer
            </h1>
            <div>
            <span>r</span><br />
            <button onClick={()=>dispatch({type:'Increment_R', payload:20})}>+</button>
            <button onClick={()=>dispatch({type:'Decrement_R'})}>-</button>
            </div>
            <div>
            <span>g</span><br />
            <button onClick={()=>dispatch({type:'Increment_G'})}>+</button>
            <button onClick={()=>dispatch({type:'Decrement_G'})}>-</button>
            </div>
            <div>
            <span>b</span><br />
            <button onClick={()=>dispatch({type:'Increment_B'})}>+</button>
            <button onClick={()=>dispatch({type:'Decrement_B'})}>-</button>
            </div>
        </div>
}