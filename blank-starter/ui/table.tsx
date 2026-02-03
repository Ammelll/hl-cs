'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
class Book {
    id!: number;
    title!: string;
    author!: string;
    description!: string;
}
export default function BookTable(){
    const router = useRouter();
    const books = Object.values({...localStorage}).map((book: string) => (JSON.parse(book)));
    let params = new URLSearchParams(useSearchParams());
    return (
    <div>
      {books?.map((book: Book) => {
        params.set('id',book.id.toString());
        return <p key={book.id}>
          <Link href={`/detail?${params}`}>Title: {book.title}</Link>  <Link href={`/detail?${params}&update=true`}>UPDATE</Link>    <button onClick={()=> deleteBook(book.id.toString())}>DELETE</button>
        </p>
    })}
    <button type="button" onClick={() => {
      params.set('id',((Math.max(...Object.keys(localStorage).map(s => Number(s)))+1)).toString());
      router.replace(`/detail?${params}`)
    }}>
      Add Book
    </button>
    </div>
    );
}
function deleteBook(id:string){
  localStorage.removeItem(id);
}