import React,{useState} from 'react';
import FoodItem from "./FoodItem";
import { FoodContext } from "./FoodContext";
export default function FoodSection() {
    const [foodItems, setFoodItems] = useState([<FoodItem key="0" />,<FoodItem key="02"/>])
    return (
        <section className="food-section panel-section">
            <FoodContext.Provider value={[foodItems, setFoodItems]} >
              {foodItems}
            </FoodContext.Provider>
        </section>
    )
}