import React from 'react';
import useTypewriter from 'react-typewriter-hook';
import 'tailwindcss/tailwind.css';

const Home = () => {
  const text = useTypewriter('Hi, Welcome to my website', 30);
  return (
    <div className="flex h-screen bg-gradient-to-r to-blue-500 relative">
      <div className="w-1/2 bg-gradient-to-r to-green-500"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gradient-to-r from-pink-200 rounded-full w-64 h-64"></div>
        <h1 className="absolute text-8xl font-light text-light-blue-500 font-cursive">{text}</h1>
      </div>
    </div>
  );
};

export default Home;
