import React, { useContext, useState } from "react";
import { foodCountContext } from "./FoodItem";

const remove_icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hero-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
const add_icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hero-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
const time_icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hero-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>;


export default function FoodToolbar() {
    const [foodCount, setFoodCount] = useContext(foodCountContext);
    let [disableStatus, setDisableStatus] = useState({
        status: false,
        text: 'غیر قابل سفارش'
    });
   

    const addFoodCount = () => {
        setFoodCount(foodCount + 1)
    }

    const disableFood = (event) => {
        let item = event.target.closest('.food-item');
        item.classList.toggle('disable');
        if (disableStatus.status === false) {

            setDisableStatus( {    
                status : true,
                text : "قابل سفارش"
            })
        } else {
            setDisableStatus( {    
                status : false,
                text : "غیر قابل سفارش"
            })

        }
        
        


    }

    return (
        <div className="food-toolbar">
            <button >
                {remove_icon}
                حذف غذا
            </button>
            <button onClick={addFoodCount}>
                {add_icon}
                افزایش تعداد
            </button>
            <button onClick={disableFood}>
                {time_icon}
                {disableStatus.text }
            </button>
        </div>
    )
}