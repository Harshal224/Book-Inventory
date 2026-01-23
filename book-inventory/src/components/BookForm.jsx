import { useState } from "react";
import { addBook } from "../services/bookService";
import { validateBook } from "../utils/validation";

function BookForm({ onBookAdded }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publisher: "",
    publishedDate: "",
    age: "",
    email: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateBook(book);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await addBook(book);
    onBookAdded();
    setBook({
      title: "",
      author: "",
      publisher: "",
      publishedDate: "",
      age: "",
      email: "",
      description: ""
    });
    setErrors({});
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5>Add New Book</h5>

        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2" name="title" placeholder="Title"
            value={book.title} onChange={handleChange} />
          {errors.title && <div className="text-danger">{errors.title}</div>}

          <input className="form-control mb-2" name="author" placeholder="Author"
            value={book.author} onChange={handleChange} />
          {errors.author && <div className="text-danger">{errors.author}</div>}

          <input className="form-control mb-2" name="publisher" placeholder="Publisher"
            value={book.publisher} onChange={handleChange} />

          <input className="form-control mb-2" name="publishedDate" placeholder="Published Date"
            value={book.publishedDate} onChange={handleChange} />

          <input className="form-control mb-2" name="age" placeholder="Age"
            value={book.age} onChange={handleChange} />
          {errors.age && <div className="text-danger">{errors.age}</div>}

          <input className="form-control mb-2" name="email" placeholder="Email"
            value={book.email} onChange={handleChange} />
          {errors.email && <div className="text-danger">{errors.email}</div>}

          <textarea className="form-control mb-2" name="description"
            placeholder="Description"
            value={book.description} onChange={handleChange} />

          <button className="btn btn-primary mt-2">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
