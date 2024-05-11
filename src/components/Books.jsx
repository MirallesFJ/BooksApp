import { useState } from "react";
import BooksTable from "./BooksTable";
import NewBookModal from "./NewBookModal";
import NewBookForm from "./NewBookForm.jsx";
import initialBooks from "../assets/BooksDatabase";
import GoogleBooks from "./GoogleBooks/GoogleBooks.jsx";

export default function Books() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState(initialBooks);

  const addBook = (newBook) => {
    setIsModalOpen(false);
    setBooks((prevBooks) => [...prevBooks, newBook]); // Add the new book to the list
  };

  function handleAddBook() {
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="p-6 bg-gray-100 text-gray-800">
        <NewBookModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <NewBookForm onSubmit={addBook} />
        </NewBookModal>
        <BooksTable books={books} />
        <div className="grid grid-cols-3 gap-x-20 mt-5 mb-5 max-w-lg mx-auto">
          <button
            onClick={handleAddBook}
            className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-600 max-w-xs text-center"
          >
            Add
          </button>
          <button className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-600 max-w-xs text-center">
            Edit
          </button>
          <button className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-600 max-w-xs text-center">
            Delete
          </button>
        </div>
      </div>

      <GoogleBooks />
    </>
  );
}
