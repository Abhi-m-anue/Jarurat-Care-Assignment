import { Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white bg-opacity-20 backdrop-blur-md text-black py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Home className="text-3xl ml-10" />
        </div>
        <nav>
          <ul className="flex space-x-4 mr-10">
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
