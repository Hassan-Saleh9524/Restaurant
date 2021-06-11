export default function InputMapSelect(props) {
    const {inputId, labelValue, inputType,inputValue} = {...props};

    return (
        <label htmlFor={inputId} className="form-input">
            {labelValue}: <br/>
            <input type={inputType} id={inputId} value={inputValue} className="inputMapSelect" />
          
        </label>
    )
    
};
