export default function EditButtons(){
    return (
        <div className="grid grid-cols-3 gap-x-20 mt-5 mb-5">
            <button className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-600 max-w-xs text-center">
                Add
            </button>
            <button className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-600 max-w-xs text-center">
                Edit
            </button>
            <button className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-600 max-w-xs text-center">
                Delete
            </button>
        </div>

    )
}



