import { useState } from 'react';
import AddMobileNumber from './AddMobileNumber';
export default function MobileNumberInput(props) {
    const { inputId, labelValue, placeholder, inputType } = { ...props };
    const [numberTemplate, setNumberTemplate] = useState([]);

    const addNumber = () => {
        let input_number = document.getElementById('restaurant-callNumber').value;
        if (input_number === '') return;
        setNumberTemplate(prevNumber => {
            return (
                [...prevNumber,
                    input_number]
            )
        })
    }
    const removeNumber = (event) => {
        let cleanNumbers = numberTemplate.filter((num) => {
            return num !== event.target.innerHTML
        })
        setNumberTemplate(cleanNumbers)
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
                added_numbers}
        </label>
    )

};
