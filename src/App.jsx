import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="bg-blue-500 text-white w-full py-4">
        <h1 className="text-center text-3xl font-bold">My Portfolio</h1>
      </header>

      {/* Main Section */}
      <main className="flex-grow w-full px-4 py-8">
        <section className="bg-white shadow-md rounded-md p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600">
            Hi! I'm a passionate developer who loves building web applications
            with React and Tailwind CSS. Welcome to my portfolio!
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 w-full">
        <p className="text-center">© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

