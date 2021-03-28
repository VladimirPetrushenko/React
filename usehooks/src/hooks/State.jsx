import { div } from 'prelude-ls';
import React,{useState} from 'react'

export function State() {
    const [books, setBooks] = useState([
        {id: 1, title: 'JS begginer'},
        {id: 2, title: 'JS advance'},
        {id: 3, title: 'REACT JS'},
    ]);

    const add = () => setBooks([
        ...books,
        {id:4, 
        title:'C# Developer'}
    ]);
    return <div onClick={add}>
        {
            books.map((book) => book.title)
        }
    </div>
}
