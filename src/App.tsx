import MainLayout from "./layouts/MainLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Cart from "./pages/Cart.tsx";
import DetailProduct from "./pages/DetailProduct.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import Favorites from "./pages/Favorites.tsx";
import Category from "./pages/Category.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "contact/", element: <Contact /> },
        { path: "about/", element: <About /> },
        { path: "cart/", element: <Cart /> },
        { path: "products/:id", element: <DetailProduct /> },
        { path: "favorites/", element: <Favorites /> },
        { path: "categories/:categoryName", element: <Category /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
