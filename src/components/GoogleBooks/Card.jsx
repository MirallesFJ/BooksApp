import { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16"> {/* Grid for layout */}
        {book.map((item, index) => {
          const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail; // Optional chaining
          const pages = item.volumeInfo.pageCount;
          const amount = item.saleInfo.listPrice?.amount;

          if (thumbnail && amount) { // Ensure thumbnail and amount are available
            return (
              <div
                key={index} // Unique key for React rendering
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs" // Styling for card
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img
                  src={thumbnail}
                  alt={item.volumeInfo.title}
                  className="w-full h-48 object-contain" // Ensure the image fits
                />
                <div className="p-4 flex justify-between items-center text-black"> {/* Content below image */}
                  <h3 className="text-lg font-semibold">{item.volumeInfo.title}</h3> {/* Book title */}
                  <p>{amount}€</p> {/* Book price */}
                  {/* <p>Pages: {pages}</p> */}
                </div>
              </div>
            );
          }

          return null; // Return null if no thumbnail or amount
        })}
      </div>

      {show && ( // Render Modal conditionally
        <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
      )}
    </>
  );
};

export default Card;
