import { useState } from 'react'
import Book from './components/Book'
import './App.css';
import { booksData } from './booksData'

const App = () => {
  const [books] = useState(booksData)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Books Library</h1>
      </header>
      {books.map((book, index) => (
        <Book title={book.title} key={index} author={book.author} shortDescription={book.shortDescription} url={book.url} publisher={book.publisher} publicationDate={book.publicationDate} detailedDescription={book.detailedDescription} coverImageUrl={book.coverImageUrl}/>
      ))}
    </div>
  );
}

export default App;
