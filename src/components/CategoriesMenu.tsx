import { NavLink } from "react-router-dom";

const categoriesMenu: { to: string; title: string }[] = [
  { to: "laptops/", title: "Laptops" },
  { to: "phones/", title: "Phones" },
  { to: "home-appliances/", title: "Home appliances" },
  { to: "tools/", title: "Tools" },
  { to: "generators/", title: "Generators" },
];

export default function CategoriesMenu() {
  return (
    <ul className="-mt-4 pt-4 border-r min-w-40">
      {categoriesMenu.map(({ to, title }) => (
        <li key={title} className="p-2">
          <NavLink to={`/categories/${to}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
}
