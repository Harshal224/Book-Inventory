import { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import { deleteBook } from "../services/bookService";


function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBooks().then(res => setBooks(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h4>Book Inventory</h4>
      <p className="text-muted">Manage your book collection</p>

      <div className="card mt-3">
        <div
          className="card-body table-responsive"
          style={{ maxHeight: "400px" }}
        >
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {books.map(book => (
                <tr key={book.id}>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/books/${book.id}`)}
                  >
                    {book.title}
                  </td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteBook(book.id).then(() =>
                          getBooks().then(res => setBooks(res.data))
                        );
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
      <BookForm onBookAdded={() => {
        getBooks().then(res => setBooks(res.data));
      }} />

    </div>

  );
}

export default Home;
