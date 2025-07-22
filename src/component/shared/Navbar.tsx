import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass =
    "px-4 py-2 rounded-md text-sm font-medium transition duration-200";

  const routes = [
    { path: "/", name: "Home" },
    { path: "/archived", name: "Archived" },
    { path: "/add-event", name: "Add event" },
  ];

  return (
    <nav className="bg-white shadow-md px-4 md:px-24 py-2 flex items-center justify-between sticky top-0 z-20">
      <div className="text-2xl font-bold text-green-700">
        <Link to="/">
          {" "}
          <img src="/logo.png" alt="logo" className="w-[15vw] md:w-[6vw]" />
        </Link>
      </div>

      <ul className="flex md:space-x-6">
        {routes.map((route) => (
          <li key={route.name}>
            <NavLink
              to={route.path}
              end
              className={({ isActive }) =>
                `${linkClass} ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-600 hover:text-white duration-500"
                }`
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
