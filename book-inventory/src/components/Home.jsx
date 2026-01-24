import { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import { deleteBook } from "../services/bookService";


function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getBooks().then(res => setBooks(res.data));
  }, []);

  return (
  <div className="w-100 mt-5 pt-2 px-0">

    <div className="row g-0 mx-0 w-100">

      {/* LEFT COLUMN – FORM */}
      <div className="col-12 col-lg-5 px-2">
        <BookForm
          selectedBook={selectedBook}
          clearSelection={() => setSelectedBook(null)}
          onSuccess={() => getBooks().then(res => setBooks(res.data))}
        />
      </div>

      {/* RIGHT COLUMN – TABLE */}
      <div className="col-12 col-lg-7 px-0">
        <div className="card shadow-sm rounded-0 w-100">
          <div className="card-header bg-light">
            <strong>Book Inventory</strong>
          </div>

          <div className="card-body p-0">
            <div
              style={{
                maxHeight: "820px",
                overflowY: "auto",
                overflowX: "hidden"
              }}
            >
              <table className="table table-striped table-hover table-sm mb-0 w-100">
                <thead className="table-light sticky-top">
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
                          className="btn btn-warning btn-sm me-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBook(book);
                          }}
                        >
                          Edit
                        </button>
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
        </div>
      </div>

    </div>
  </div>
);



}

export default Home;
