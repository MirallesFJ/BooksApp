import { useState } from 'react';

export default function NewBookForm( {onSubmit} ) {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        status: '',
        rating: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'rating' ? parseInt(value) : value, // Parse rating to number
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        onSubmit(formData); // Pass the new book data to the parent component
        setFormData({ title: '', author: '', genre: '', status: '', rating: 0 }); // Reset the form
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Add a New Book</h2>
            <div className="mb-4">
                <label htmlFor="title" className="block font-semibold">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="author" className="block font-semibold">Author</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="genre" className="block font-semibold">Genre</label>
                <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="status" className="block font-semibold">Status</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                >
                    <option value="">Select status</option>
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Not Started">Not Started</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="rating" className="block font-semibold">Rating</label>
                <input
                    type="number"
                    id="rating"
                    name="rating"
                    min="0"
                    max="5"
                    value={ formData.rating >= 0 && formData.rating <= 5 ? formData.rating : '' }
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <div className="grid grid-cols-3 gap-x-20 mt-5 mb-5">
                <button type="submit" className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-600">
                    Submit
                </button>
                <button type="button" className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-600">
                    Cancel
                </button>
            </div>
        </form>
    );
}
