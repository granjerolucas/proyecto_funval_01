import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 flex flex-col">
        {children}
      </main>
    </div>
  );
}

export default Layout;