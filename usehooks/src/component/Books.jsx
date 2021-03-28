import React, {useContext} from 'react'
import {ContextInContext} from '../hooks/Context'
import {Book} from './Book'

export function Books() {
    const {books} = useContext(ContextInContext);

    return <div>
        {books.map(item => {
            return <Book key={item.id} {...item} />
            })
        }
    </div>
}