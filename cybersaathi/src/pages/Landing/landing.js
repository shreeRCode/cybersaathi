"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6">
      <div className="max-w-3xl bg-white shadow-xl rounded-2xl p-10 text-center border border-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-wide">
          Welcome to <span className="text-blue-700">CYBERSAATHI</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Empowering you to navigate the digital world safely. Learn to
          recognize, prevent, and respond to cyber threats—whether you are a
          student, professional, homemaker, rural user, or senior citizen.
        </p>

        <p className="text-xl font-semibold text-blue-800 mb-8">
          Start your journey towards better online safety and security!
        </p>

        <button
          onClick={() => router.push("/signup")}
          className="bg-blue-700 hover:bg-blue-800 transition-all text-white text-lg px-8 py-3 rounded-lg shadow-md hover:shadow-lg"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Landing;
