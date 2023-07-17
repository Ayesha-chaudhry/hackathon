import React from "react";

const Newsletter = () => {
  return (
    <section className="mt-40 text-center relative">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-4">
          Subscribe Our Newsletter
        </h1>
        <p className="mb-8">
          Get the latest information and promo offers directly
        </p>
        <input
          className="border border-black w-[20%] px-3 py-2 text-sm"
          placeholder="Input email address"
        />
        <span>
          <button className="ml-2 bg-black text-white font-medium px-8 py-2 border-2 border-gray-500">
            Get Started
          </button>
        </span>
      </div>

      <h2 className="absolute text-gray-100 top-4 right-8 left-2 -z-10 text-6xl md:text-9xl font-bold">
        Newsletter
      </h2>
    </section>
  );
};

export default Newsletter;
