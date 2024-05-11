export default function BooksTable({books}) {

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
                ★
            </span>
        ));
    };

    return (
        <>

                <h1 className="text-3xl font-bold mb-4">My Books</h1>
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Author</th>
                            <th className="px-4 py-2">Genre</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Stars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={index} className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                <td className="px-4 py-2">{book.title}</td>
                                <td className="px-4 py-2">{book.author}</td>
                                <td className="px-4 py-2">{book.genre}</td>
                                <td className="px-4 py-2">{book.status}</td>
                                <td className="px-4 py-2">{renderStars(book.rating)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </>
    );
}