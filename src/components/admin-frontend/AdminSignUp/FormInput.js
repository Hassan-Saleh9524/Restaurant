export default function FormInput(props) {
    const {inputId, labelValue, inputType, placeholder,onInput} = {...props};

    return (
        <label htmlFor={inputId} className="form-input">
            {labelValue}: <br/>
            <input type={inputType} id={inputId} onInput={onInput} placeholder={placeholder} minLength="8" />
          
        </label>
    )
    
};
