import { Link } from "react-router-dom"


export const NavBar = () => {
    return (
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-lg font-bold">
            MyLogo
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-black hover:text-gray-500 transition duration-300">Home</Link>
            <Link to="/" className="text-black hover:text-gray-500 transition duration-300">About</Link>
            <Link to="/" className="text-black hover:text-gray-500 transition duration-300">Serivces</Link>
            <Link to="/" className="text-black hover:text-gray-500 transition duration-300">Contact</Link>
          </div>
        </div>
      </nav>
    );
  };