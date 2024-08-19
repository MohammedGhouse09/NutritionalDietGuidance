import React from 'react';

function Banner() {
  return (
    <>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://www.eatingwell.com/thmb/Ch2LFPGHsQ5kySirTzPLNd0LfdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14-days-clean-eating-meal-plan-1200-lede-601736337d914519bb5bf8eb83540da1.jpg"
              alt="Healthy food"
              className="max-w-md rounded-lg shadow-2xl" 
            />
            <div>
              <h1 className="text-6xl font-bold">Welcome to Your Personalized Nutrition Journey</h1>
              <p className="py-8 text-lg">
                Discover the perfect meal plans tailored to your unique needs. Whether you're looking to manage weight, improve health, or simply eat better, we provide comprehensive guidance to help you achieve your goals.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
