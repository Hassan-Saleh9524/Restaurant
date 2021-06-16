export default function FormTextarea(props) {
    const {inputId, labelValue, placeholder,onInput} = {...props};

    return (
        <label htmlFor={inputId} className="form-input">
            {labelValue}: <br/>
        <textarea id={inputId} placeholder={placeholder} onInput={onInput} maxLength="140"></textarea>
        </label>
    )
    
};
