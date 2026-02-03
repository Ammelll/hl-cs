'use client'

import { useSearchParams } from "next/navigation"
import { useState } from "react";
import Book from "@/ui/table";
export default function BookDisplay(){
    let id = useSearchParams()?.get('id') ?? '';
    let update = useSearchParams()?.get('update') ?? '';
    const book = JSON.parse(localStorage.getItem(id) ?? '{}');
    let button = <button onClick={() => addBook(id)}>{update ? "update" : "add"}</button>   
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    if(Object.keys(book).length != 0 && !update){button = <div></div>}
    return (<div>
   <div>
  Title: {(book.title && !update) ? book.title : <input onChange={(e) => setTitle(e.target.value)} />}
</div>
<div>
  Author: {(book.author && !update) ? book.author : <input onChange={(e) => setAuthor(e.target.value)} />}
</div>
<p>
  Description: {(book.description && !update) ? book.description : <input onChange={(e) => setDescription(e.target.value)} />}
</p>
    {button}
    </div>
    )
    function addBook(id:string){
        let book = {
            id: Number(id),
            title: title,
            author: author,
            description: description,
        }
        localStorage.setItem(id,JSON.stringify(book));
}
    }
