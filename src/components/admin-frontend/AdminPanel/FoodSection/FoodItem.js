
import {createContext, useState} from 'react';
import background from '../../../../asset/images/kebab-background.jpg';
import FoodToolbar from "./FoodToolbar";
const  foodCountContext = createContext(null);
export default function FoodItem(props) {
    const {foodName, restaurantName, foodPrice, foodCount, foodImage,foodId} = {...props};
    
    const [food_count, setFoodCount] = useState(foodCount)
    return (
        <div className={`food-item`}>
            <img src={URL.createObjectURL(foodImage) ?? background} alt={foodImage.name} className="food-img" />
            <strong className="food-name">{foodName}</strong>
            <p className="food-restaurantName">{restaurantName}</p>
            <footer>
                <div>
                    تعداد:
                    <span className="food-count">{food_count}</span>
                </div>

                <strong className="food-price">{foodPrice}</strong>
            </footer>
            <foodCountContext.Provider value={[food_count,setFoodCount]}>

            <FoodToolbar foodId={foodId}/>
            </foodCountContext.Provider>
        </div>
    )
}
export {foodCountContext}