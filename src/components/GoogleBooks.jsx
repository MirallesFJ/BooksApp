import { useState, useEffect } from "react";
import axios from "axios";

const GoogleBooks = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = () => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&langRestrict=en" +
          "&orderBy=relevance" +
          "&key=" +
          "&maxResults=40"
      )
      .then((res) => {
        console.log(res.data.items);
        setData(res.data.items);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-28">
      <h2 className="text-2xl font-bold text-gray-600 mb-4">Find Your Book</h2>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter Your Book Name"
          className="border border-gray-300 rounded-lg p-2 w-full text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={searchBook}
          className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-10">
        {bookData && bookData.length > 0 ? (
          <table className="table-auto text-black">
            <thead>
              <tr>
                <th className="px-4 py-2">Cover</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Pages</th>
              </tr>
            </thead>
            <tbody>
              {bookData.map((book, index) => {
                return (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-black">
                      <img
                        src={book.volumeInfo.imageLinks?.smallThumbnail}
                        alt={book.volumeInfo.title}
                        className="w-full h-32 object-contain" // Ensure the image fits
                      />
                    </td>
                    <td className="border px-4 py-2 text-black">
                      {book.volumeInfo.title}
                    </td>
                    <td className="border px-4 py-2 text-black">
                      {book.volumeInfo.authors && book.volumeInfo.authors[0]}
                    </td>
                    <td className="border px-4 py-2 text-black">
                      {book.volumeInfo.pageCount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default GoogleBooks;
