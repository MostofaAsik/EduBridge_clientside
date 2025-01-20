import { useState } from "react";
import { Link } from "react-router";
import { FaHome, FaUniversity, FaBookOpen, FaUserCircle, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [theme, setTheme] = useState("light");
    const [menuOpen, setMenuOpen] = useState(false);
    const paths = ["/", "/colleges", "/admission", "/my-college"];




    // const toggleTheme = () => {
    //     const newTheme = theme === "light" ? "dark" : "light";
    //     setTheme(newTheme);
    //     document.documentElement.setAttribute("data-theme", newTheme);
    // };

    return (
        <nav className="navbar bg-base-100 dark:bg-gray-900 shadow-md relative">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Website Logo */}
                <div className="flex items-center">
                    <h1 className="text-xl lg:text-2xl font-bold text-primary dark:text-white">
                        <Link to="/">EduBridge</Link>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 items-center">
                    {paths.map((path, index) => (
                        <Link
                            key={index}
                            to={path}
                            className="btn btn-ghost flex flex-col items-center text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary"
                        >
                            {index === 0 && <FaHome size={20} />}
                            {index === 1 && <FaUniversity size={20} />}
                            {index === 2 && <FaBookOpen size={20} />}
                            {index === 3 && <FaUserCircle size={20} />}
                            <span className="text-sm">
                                {["Home", "Colleges", "Admission", "My College"][index]}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* User Controls */}
                <div className="flex items-center space-x-2">
                    {/* Theme Toggle */}
                    {/* <button
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-sm text-gray-700 dark:text-white"
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
                    </button> */}

                    {/* User Avatar or Login Button */}
                    {isLoggedIn ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-8 lg:w-10 rounded-full">
                                    <img src="https://via.placeholder.com/150" alt="User Avatar" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52"
                            >
                                <li>
                                    <Link to="/profile" className="text-gray-700 dark:text-white">
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setIsLoggedIn(false)}
                                        className="text-gray-700 dark:text-white"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsLoggedIn(true)}
                            className="btn btn-primary btn-sm text-white"
                        >
                            Login
                        </button>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="btn btn-ghost lg:hidden"
                        aria-label="Toggle Mobile Menu"
                    >
                        {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="absolute top-full left-0 w-full bg-base-100 dark:bg-gray-900 shadow-md transition-all z-10"
                >
                    <ul className="menu menu-compact p-4 flex flex-col space-y-3">
                        {paths.map((path, index) => (
                            <li key={index}>
                                <Link
                                    to={path}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary"
                                >
                                    {index === 0 && <FaHome size={16} />}
                                    {index === 1 && <FaUniversity size={16} />}
                                    {index === 2 && <FaBookOpen size={16} />}
                                    {index === 3 && <FaUserCircle size={16} />}
                                    <span className="ml-2 text-sm">
                                        {["Home", "Colleges", "Admission", "My College"][index]}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
