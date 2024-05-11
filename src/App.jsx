import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Book from "./components/Books.jsx";
import Root from "./pages/Root.jsx";
import ErrorPage from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Book /> },
      { path: "/books", element: <Book /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
