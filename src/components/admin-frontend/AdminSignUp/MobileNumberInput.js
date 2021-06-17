import { useState,useContext } from 'react';
import AddMobileNumber from './AddMobileNumber';
import { AdminContext } from '../AdminContext';
export default function MobileNumberInput(props) {
    const { inputId, labelValue, placeholder, inputType } = { ...props };
    const [numberTemplate, setNumberTemplate] = useState([]);
    const [restaurantContext, setRestaurantContext] = useContext(AdminContext);

    function addNumber() {
        let input_number = document.getElementById('restaurant-callNumber').value;
        if (input_number === '') return;
       let updated_number = [...numberTemplate,input_number]
        setNumberTemplate(updated_number)
        setRestaurantContext({
            ...restaurantContext,
            mobileNumbers: updated_number
            
        })
    }
    
    function removeNumber(event){
        let cleanNumbers = numberTemplate.filter((num) => {
            return num !== event.target.innerHTML
        })
        setNumberTemplate(cleanNumbers)
        

        setRestaurantContext({
            ...restaurantContext,
            mobileNumbers: cleanNumbers
            
        })
                
    }
    let added_numbers = numberTemplate.map((num, i) => {
        return <AddMobileNumber number={num} key={i} onClick={removeNumber} />

    })

    
    return (
        <label htmlFor={inputId} className="form-input mobileNumber-label">
            {labelValue}: <br />
            <input id={inputId} placeholder={placeholder} type={inputType} />

            <button type="button" className="addMobileNumber-btn" onClick={addNumber}>اضافه</button>
            {
                added_numbers
                }
        </label>
    )

};
