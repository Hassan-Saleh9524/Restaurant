import React, { useState, useContext } from 'react';
import FoodItem from "./FoodItem";
import { NewFoodContext } from '../NewFoodSection/NewFoodContext';
// import background from '../../../../asset/images/kebab-background.jpg';

import { FoodContext } from "./FoodContext";
export default function FoodSection() {
    const [newFoodContext] = useContext(NewFoodContext)
    const [foodItems, setFoodItems] = useState(newFoodContext)

    return (
        <section className="food-section panel-section">
            <FoodContext.Provider value={[foodItems, setFoodItems]} >
                {
                    foodItems.map((foodItem, index) => {
                        return <FoodItem foodName={foodItem.foodName}
                            restaurantName={foodItem.restaurantName}
                            foodPrice={foodItem.foodPrice}
                            foodCount={foodItem.foodCount}
                            foodImage={foodItem.foodImage}
                            id={foodItem.foodId}
                            key={index}
                        />
                    })
                }
            </FoodContext.Provider>
        </section>
    )
}