import React,{useState} from 'react';
import FoodItem from "./FoodItem";
import { FoodContext } from "./FoodContext";
export default function FoodSection() {
    const test_list = ['test1', 'test2'];
   let default_foodItem =  test_list.map((test,i)=> {
        return <FoodItem className={test} key={i} />
    })
    const [foodItems, setFoodItems] = useState(default_foodItem)
    return (
        <section className="food-section panel-section">
            <FoodContext.Provider value={[foodItems, setFoodItems]} >
              {foodItems}
            </FoodContext.Provider>
        </section>
    )
}