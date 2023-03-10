import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    /*We have to create a new array 'updatedBooks because
    if not, react thinks it's the same array and doesn't rerender
    so we store ...books (whatever books we already have), then 
    {id: 123, title: booktitle} appends onto the new array*/
    const updatedBooks = [
      ...books, 
      { 
        id: Math.round(Math.random() * 9999), 
        title 
      }
    ];
    setBooks(updatedBooks);
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map(book => {
      if (book.id === id){
        return { ...book, title: newTitle }
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList 
        books={books} 
        onDelete={deleteBookById}
        onEdit={editBookById}
      />
      <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App