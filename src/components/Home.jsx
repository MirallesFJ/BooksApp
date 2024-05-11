import { useState } from "react";
import BooksTable from "./BooksTable.jsx";
import NewBookModal from "./NewBookModal.jsx";
import NewBookForm from "./NewBookForm.jsx";
import initialBooks from "../assets/BooksDatabase";
import GoogleBooks from "./GoogleBooks.jsx";

export default function Home() {
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
          <NewBookForm
            onSubmit={addBook}
            onClose={() => setIsModalOpen(false)}
          />
        </NewBookModal>
        <BooksTable books={books} />
        <div className="mt-5 mb-5 max-w-lg mx-auto flex justify-center">
          <button
            onClick={handleAddBook}
            className="bg-blue-500 text-white font-bold rounded hover:bg-blue-600 text-center px-4 py-2"
          >
            Add
          </button>
        </div>
      </div>
      <GoogleBooks />
    </>
  );
}
