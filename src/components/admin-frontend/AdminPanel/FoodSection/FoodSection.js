import React, { useContext } from 'react';
import FoodItem from "./FoodItem";
import { NewFoodContext } from '../NewFoodSection/NewFoodContext';
// import background from '../../../../asset/images/kebab-background.jpg';

import { FoodContext } from "./FoodContext";
export default function FoodSection() {
    const [newFoodContext, setNewFoodContext] = useContext(NewFoodContext)
    // const [foodItems, setFoodItems] = useState(newFoodContext)

    const removeFood=(id)=> {
        console.log(id,newFoodContext)
        let new_list = newFoodContext.filter(food=> food.foodId !== id)
        setNewFoodContext(new_list)
        
    }
    return (
        <section className="food-section panel-section">
            <FoodContext.Provider value={[newFoodContext, setNewFoodContext]} >
                {
                    newFoodContext.map((foodItem, index) => {
                        return <FoodItem foodName={foodItem.foodName}
                            restaurantName={foodItem.restaurantName}
                            foodPrice={foodItem.foodPrice}
                            foodCount={foodItem.foodCount}
                            foodImage={foodItem.foodImage}
                            foodId={foodItem.foodId}
                            key={index}
                            onClick={removeFood}
                        />
                    })
                }
            </FoodContext.Provider>
        </section>
    )
}