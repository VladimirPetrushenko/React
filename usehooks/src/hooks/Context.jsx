import React, {useState, createContext} from 'react'

export const ContextInContext = createContext();

export const Context = (props) => {
    const [books, setBooks] = useState([
        {id: 1, title: 'JS begginer'},
        {id: 2, title: 'JS advance'},
        {id: 3, title: 'REACT JS'},
    ]);

    const addBook = (book) =>{
        setBooks([...books, book]);
    }

    const removeBook = (id) => {
        setBooks(books.filter(book=>book.id!==id));
    }

    const value = {
        books,
        addBook,
        removeBook,
    }

    return <ContextInContext.Provider value={value}>
        {props.children}
    </ContextInContext.Provider>
}