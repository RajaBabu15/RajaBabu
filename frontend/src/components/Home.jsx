import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Welcome to your new React app!
          </h2>
          <p className="mt-4 text-lg text-white">
            This is a great place to start building your next web application.
          </p>
          <a
            href="https://tailwindcss.com/"
            className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Learn more about Tailwind CSS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;