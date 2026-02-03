'use client'
import books from '@/books.json'
export default function LoadLocalStorage(){
    return <button onClick={loadLocalStorage}>Load Storage</button>
}
function loadLocalStorage(){
    localStorage.clear()
    books.forEach((book) =>{
        
        localStorage.setItem(book.id.toString(),JSON.stringify({
            id: book.id,
            title: book.title,
            author: book.author,
            description: book.description
        })
    )})
}
