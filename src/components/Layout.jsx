            import React from 'react';
            const Layout = ({ children }) => {
              return (
                <div className="flex flex-col min-h-screen bg-gray-100">
                  <nav className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                      <span className="text-xl font-semibold text-gray-800">Main App</span>
                      <div className="flex items-center">
                        <img
                          src="/api/placeholder/32/32"
                          alt="User avatar"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="ml-2 text-sm text-gray-700">user@mail.com</span>
                        <svg
                          className="w-4 h-4 ml-1 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <pathjnfghkofgfok
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </nav>
                  <main className="flex-grow container mx-auto p-4">
                    <div className="flex flex-col gap-4 h-[calc(100vh-5rem)]">
                      <div className="flex gap-4 h-2/3">
                        <div className="w-1/2 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center">
                          <h2 className="text-lg font-semibold text-gray-700 text-center">Albums</h2>
                        </div>
                        <div className="w-1/2 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center">
                          <h2 className="text-lg font-semibold text-gray-700 text-center">Posts</h2>
                        </div>
                      </div>
                      <div className="h-1/3 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center">
                        <h2 className="text-lg font-semibold text-gray-700 text-center">Todos</h2>
                      </div>
                    </div>
                  </main>
                </div>
              );
            };
            
            export default Layout;