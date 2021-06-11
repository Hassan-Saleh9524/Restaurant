export default function FormTextarea(props) {
    const {inputId, labelValue, placeholder} = {...props};

    return (
        <label htmlFor={inputId} className="form-input">
            {labelValue}: <br/>
        <textarea id={inputId} placeholder={placeholder} maxLength="140"></textarea>
        </label>
    )
    
};
