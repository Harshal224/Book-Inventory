import { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(res => setBooks(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h4>Book Inventory</h4>
      <p className="text-muted">
        Manage your book collection
      </p>

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
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
