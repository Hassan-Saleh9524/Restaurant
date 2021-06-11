export default function MobileNumberInput(props) {
    const {inputId, labelValue, placeholder,inputType} = {...props};

    return (
        <label htmlFor={inputId} className="form-input mobileNumber-label">
            {labelValue}: <br/>
        <input id={inputId} placeholder={placeholder} type={inputType} />
        <button className="addMobileNumber-btn">اضافه</button>
        </label>
    )
    
};
