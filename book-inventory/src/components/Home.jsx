import { useEffect } from "react";
import { getBooks } from "../services/bookService";

function Home() {
  useEffect(() => {
    getBooks().then(res => console.log(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h4>Book Inventory</h4>
      <p className="text-muted">Manage your book collection</p>
    </div>
  );
}

export default Home;
