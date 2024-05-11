import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <header className="bg-blue-600 p-4">
      <nav>
        <ul className="flex justify-between items-center">
          <li className="text-white text-lg">
            <Link to="/books" className="hover:text-gray-200 mx-2">
              Books
            </Link>
          </li>
          {/* You can add more links or other items to the navbar as needed */}
        </ul>
      </nav>
    </header>
  );
}
