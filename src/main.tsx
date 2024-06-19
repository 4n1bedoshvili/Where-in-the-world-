import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import SinglePage from "./pages/singlePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/country/:name", 
    element: <SinglePage/>
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
