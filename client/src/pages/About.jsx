import React from "react";
import ownerPhoto from "../assets/thakur.jpg";
export const About = () => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">
        About Thakur Estate
      </h1>

      <div className="flex flex-col items-center mb-8">
        <img
          src={ownerPhoto}
          alt="Thakur Neupane"
          className="w-60 h-60 rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-semibold text-slate-800">Thakur Neupane</h2>
        <p className="text-gray-600 text-sm">Founder & CEO</p>
      </div>

      <p className="mb-6 text-slate-700">
        Welcome to Thakur Estate, where your real estate dreams come to life. As
        a premier agency specializing in buying, selling, and renting properties
        in the most desirable neighborhoods, our team is dedicated to delivering
        exceptional service tailored to your unique needs.
      </p>
      <p className="mb-6 text-slate-700">
        Our mission is to provide unparalleled expertise and personalized
        service throughout your real estate journey. Whether you're searching
        for your dream home, considering selling a property, or seeking a rental
        that fits your lifestyle, we are here to ensure a smooth and rewarding
        experience.
      </p>
      <p className="mb-6 text-slate-700">
        At Thakur Estate, we pride ourselves on our deep market knowledge and
        our unwavering dedication to client satisfaction. Our experienced agents
        are passionate about real estate and committed to making every
        transaction exciting and fulfilling. We believe in creating memorable
        experiences and achieving outstanding results for each and every client.
      </p>

      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          A Message from the Founder
        </h3>
        <p className="text-slate-700">
          "At Thakur Estate, we are more than just real estate professionals; we
          are your partners in finding the perfect property. My team and I are
          devoted to making your real estate experience exceptional. We look
          forward to helping you achieve your goals and making your journey with
          us a truly rewarding one."
        </p>
        <p className="text-gray-600 mt-4">— Thakur Neupane</p>
      </div>
    </div>
  );
};
