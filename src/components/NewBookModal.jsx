// import { X } from "react-feather"

export default function Modal({ open, onClose, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/75" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()} //Prevent the closing of the modal when we press on it.
        className= "bg-white rounded-xl shadow p-6 transition-all scale-100 opacity-100"
        
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
             &#x2715; {/*To display symbol: ✕ */}
        </button>
        {children}
      </div>
    </div>
  )
}