import React, {useContext} from 'react'
import {ContextInContext} from '../hooks/Context'


export function Book(props) {
    const {removeBook} = useContext(ContextInContext);
    return <div onClick={()=>removeBook(props.id)}>{props.title}</div>
}