import { NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import IconButton from "./IconButton.tsx";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { useAppSelector } from "../hooks";

const pages = [
  { to: "/", title: "Home" },
  { to: "/contact", title: "Contact" },
  { to: "/about", title: "About" },
];

export default function Header() {
  const navigate = useNavigate();
  const cartProductsLength = useAppSelector(
    (state) => state.cartProducts.items.length,
  );
  const favoriteProductsLength = useAppSelector(
    (state) => state.favoriteProducts.items.length,
  );

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b">
      <NavLink to="/" className="font-bold text-2xl">
        React products
      </NavLink>
      <nav>
        <ul className="flex justify-center items-center gap-x-6">
          {pages.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx({ active: isActive }, "header-link")
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-x-1 ">
        <IconButton
          className="relative"
          variant="light"
          onClick={() => navigate("/favorites/")}
        >
          <AiOutlineHeart />
          {favoriteProductsLength > 0 && (
            <span className="flex items-center justify-center absolute leading-n -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full text-white">
              {favoriteProductsLength}
            </span>
          )}
        </IconButton>
        <IconButton
          className="relative"
          variant="secondary"
          onClick={() => navigate("/cart/")}
        >
          <BsCart />
          {cartProductsLength > 0 && (
            <span className="flex items-center justify-center absolute leading-n -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full text-white">
              {cartProductsLength}
            </span>
          )}
        </IconButton>
        {/*<Menu>*/}
        {/*  <MenuButton>*/}
        {/*    <IconButton variant="light">*/}
        {/*      <BiUser />*/}
        {/*    </IconButton>*/}
        {/*  </MenuButton>*/}
        {/*  <MenuItems anchor="bottom">*/}
        {/*    <MenuItem>*/}
        {/*      <span>Log In</span>*/}
        {/*    </MenuItem>*/}
        {/*  </MenuItems>*/}
        {/*</Menu>*/}
        {/*<ThemeController />*/}
      </div>
    </header>
  );
}
