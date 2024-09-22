const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Jarurat Care. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
