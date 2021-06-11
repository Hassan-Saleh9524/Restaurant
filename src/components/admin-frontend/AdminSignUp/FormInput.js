export default function FormInput(props) {
    const {inputId, labelValue, inputType, placeholder} = {...props};

    return (
        <label htmlFor={inputId} className="form-input">
            {labelValue}: <br/>
            <input type={inputType} id={inputId} placeholder={placeholder} minLength="8" />
          
        </label>
    )
    
};
