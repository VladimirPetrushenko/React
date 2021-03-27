import React, {useEffect, useRef} from 'react'

const WithRef = () => {
    const inputEl = useRef(null);

    console.log(inputEl);
    const numRef = useRef(0);


    useEffect(()=>{
        console.log(inputEl);
        console.log(numRef.current);
    });
    
    const handleClick = () =>{
        numRef.current = 1;
    }
    

    return  <div>
                <input placeholder="name" ref = {inputEl}/>
                 <button onClick={handleClick}>{numRef.current}</button> 
            </div> 

}

export {WithRef}