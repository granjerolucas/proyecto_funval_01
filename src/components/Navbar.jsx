function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <span className="text-lg font-semibold">Main App</span>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="ml-2">user@mail.com</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;