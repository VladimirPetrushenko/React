import React, {useEffect} from 'react'

export function Effect() {
    useEffect(()=>{
        console.log('montirovanie function');

        return ()=>console.log('unmontirovanie function');
    },[]);

    return <div></div>
}