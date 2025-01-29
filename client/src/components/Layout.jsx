import React from 'react';

const Layout = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h1 className="text-xl font-bold mb-4">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
