import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [book, setBook] = useState({});

  const handleFetchBooks = async () => {
    const res = await axios.get("http://localhost:5000/api/book");
    console.log(res.data);
  };

  const handlePostBook = async () => {
    const res = await axios.post("http://localhost:5000/api/book", book);
    if (res.status == 201) {
      alert(res.data.message);
    } else {
      alert(res.data.message);
    }
  };

  useEffect(() => {
    handleFetchBooks();
  }, []);
  return (
    <div>
      <div>
        <input
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          type="text"
          placeholder="title"
        />
      </div>
      <div>
        <input
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          type="text"
          placeholder="author"
        />
      </div>
      <div>
        <input
          value={book.price}
          onChange={(e) => setBook({ ...book, price: e.target.value })}
          type="text"
          placeholder="price"
        />
      </div>
      <div>
        <input
          value={book.publishedYear}
          onChange={(e) => setBook({ ...book, publishedYear: e.target.value })}
          type="text"
          placeholder="year"
        />
      </div>
      <div>
        <input
          value={book.category}
          onChange={(e) => setBook({ ...book, category: e.target.value })}
          type="text"
          placeholder="category"
        />{" "}
      </div>
      <button onClick={handlePostBook}>Add</button>
    </div>
  );
}
