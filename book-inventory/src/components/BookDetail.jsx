import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/bookService";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(res => setBook(res.data));
  }, [id]);

  if (!book) {
    return (
      <div className="container mt-4">
        <p>Loading book details...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title">{book.title}</h4>
          <p className="text-muted">{book.author}</p>

          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Published Date:</strong> {book.publishedDate}</p>
          <p><strong>Email:</strong> {book.email}</p>
          <p><strong>Age:</strong> {book.age}</p>

          <div
            className="border rounded p-2 mt-3"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {book.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
