"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]); 

    const loadMealIdeas = async () => {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
    };

    useEffect(() => {
        if (ingredient) { 
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h1>Meal Ideas</h1>
            <h2>Here are some meal ideas using: {ingredient}</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <p>{meal.strMeal}</p>
                        <img src={meal.strMealThumb} alt={meal.strMeal}/>     
                    </li>
                ))}
            </ul>
        </div>
    );
}
