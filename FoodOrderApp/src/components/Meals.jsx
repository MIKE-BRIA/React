import { useState, useEffect } from "react";

import MealItem from "./MealItem";

export default function Meals() {
  const [loadMeals, setLoadMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        return <p>Something is wrong eiyh the server...</p>;
      }
      const resData = await response.json();
      setLoadMeals(resData);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
