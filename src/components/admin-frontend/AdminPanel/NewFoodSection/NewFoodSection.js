import React, { useState, useContext } from 'react';
import { NewFoodContext } from './NewFoodContext';

export default function NewFoodSection() {
    const [newFoodContext, setNewFoodContext] = useContext(NewFoodContext);
    const [foodDetail, setFoodDetail] = useState({
        foodName: '',
        restaurantName: '',
        foodPrice: '',
        foodCount: 0,
        foodImage: '',
        foodId: ''
    })

    // const [newFood, setNewFood] = useContext(NewFoodContext)

    const handleNewName = (event) => {
        let current_name = event.target.value;
        setFoodDetail({
            ...foodDetail,
            foodName: current_name
        })
    }
    const handleNewRestaurantName = (event) => {
        let current_restaurantName = event.target.value;
        setFoodDetail({
            ...foodDetail,
            restaurantName: current_restaurantName
        })
    }

    const handleNewPrice = (event) => {
        let current_price = event.target.value;
        setFoodDetail({
            ...foodDetail,
            foodPrice: current_price
        })
    }
    const handleNewCount = (event) => {
        let current_count = +event.target.value;
        setFoodDetail({
            ...foodDetail,
            foodCount: current_count
        })
    }
    const handleNewImage = (event) => {
        let current_image = event.target.files[0];
        setFoodDetail({
            ...foodDetail,
            foodImage: current_image
        })
    }
    
    const passNewFoodInfo = () => {
        setFoodDetail({
            ...foodDetail,
            foodId: new Date().getTime()
        })
        
        setNewFoodContext([
            ...newFoodContext,
            foodDetail
        ]
        )

        alert('غذای جدید اضافه شد، تب غذاها را چک کنید')
    }
    return (
        <section className="newFood-section panel-section">
            <form>
                <label htmlFor="nameOf-newFood" className="form-input">
                    نام غذا:  <br />
                    <input type="text" id="nameOf-newFood" onInput={handleNewName} />
                </label>
                <label htmlFor="nameOf-restaurant" className="form-input">
                    نام رستوران: <br />
                    <input type="text" id="nameOf-restaurant" onInput={handleNewRestaurantName} />
                </label>
                <label htmlFor="newFood-price" className="form-input">
                    قیمت هر غذا به تومان: <br />
                    <input type="number" id="newFood-price" min={0} onInput={handleNewPrice} />
                </label>
                <label htmlFor="newFood-inventory" className="form-input">
                    تعداد موجودی:  <br />
                    <input type="number" id="newFood-inventory" min={1} onInput={handleNewCount} />
                </label>
                <label htmlFor="newFood-image" className="form-input">
                    عکس غذا:  <br />
                    <input type="file" id="newFood-image" onChange={handleNewImage} />
                </label>
                <button type="button" className="create-newFood-btn" onClick={passNewFoodInfo}>اضافه کن</button>

            </form>
        </section>
    )
}