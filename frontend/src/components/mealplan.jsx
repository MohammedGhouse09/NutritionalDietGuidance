import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from 'react-router-dom';

function MealPlan() {
  const [mealPlans, setMealPlans] = useState([]);
  const location = useLocation();
  const userDetails = location.state?.userDetails;

  useEffect(() => {
    if (userDetails) {
      // Calculate BMI
      const heightInMeters = userDetails.height / 100; // Assuming height is in cm
      const bmi = userDetails.weight / (heightInMeters * heightInMeters);

      console.log('User BMI:', bmi);
      console.log('Calculated BMI:', bmi);

      // Fetch data from list.json
      fetch('/list.json')
        .then(response => response.json())
        .then(data => {
          console.log('Fetched meal plans data:', data);

          const filteredPlans = data.mealPlans.filter(plan => {
            const [minBmi, maxBmi] = plan.bmiRange.split('-').map(Number);
            console.log(`Checking Plan: ${JSON.stringify(plan)}, BMI Range: ${minBmi} - ${maxBmi}`);
            return (
              bmi >= minBmi &&
              bmi <= maxBmi &&
              plan.diet === userDetails.diet &&
              plan.cuisine === userDetails.cuisine
            );
          });

          console.log('Filtered Plans:', filteredPlans);

          // if (filteredPlans.length === 0) {
          //   console.log('No meal plans match the given BMI, diet, and cuisine.');
          //   setMealPlans([]);
          //   return;
          // }

          // Ensure at least 7 different plans by cycling through available plans if necessary
          const extendedPlans = [];
          for (let i = 0; i < 7; i++) {
            extendedPlans.push(filteredPlans[i % filteredPlans.length]);
          }

          // Set the meal plans to state
          setMealPlans(extendedPlans);

          console.log('Final Meal Plans:', extendedPlans);
        })
        .catch(error => console.error('Error fetching meal plans:', error));
    }
  }, [userDetails]);
  console.log('User Details:', userDetails);
  
 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="mealplan-container">
      <h1 className="text-3xl font-bold text-center my-6">Your Weekly Meal Plan</h1>
      {mealPlans.length > 0 ? (
        <Slider {...settings}>
          {mealPlans.map((plan, index) => (
            <div key={index} className="meal-plan-day p-4">
              <h2 className="text-xl font-semibold">Day {index + 1}</h2>
              <ul>
                <li><strong>Breakfast:</strong> {plan?.plan?.breakfast || 'N/A'}</li>
                <li><strong>Lunch:</strong> {plan?.plan?.lunch || 'N/A'}</li>
                <li><strong>Snack:</strong> {plan?.plan?.snack || 'N/A'}</li>
                <li><strong>Dinner:</strong> {plan?.plan?.dinner || 'N/A'}</li>
              </ul>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center">Loading your meal plan...</p>
      )}
    </div>
  );
}

export default MealPlan;
