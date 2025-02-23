import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { SavedCompanies } from "./pages/SavedCompanies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/savedCompanies",
        element: <SavedCompanies />,
      },
    ],
  },
]);
