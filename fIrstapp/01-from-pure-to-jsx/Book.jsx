import React from "react";

const Book = (props)=>{
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.price} rub</p>
        </div>
    )
}

export  {Book};