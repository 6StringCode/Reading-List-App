import { useState } from 'react'

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    //onEdit(book.id, title); //no longer need because we combined into handleSubmit
    //title above refers to the state (in the useEffect), which is being updated from the input

    onSubmit(book.id, title); 
  }

  return (
    <div>
      <form className='book-edit' onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  )
}

export default BookEdit