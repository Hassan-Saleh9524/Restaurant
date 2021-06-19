export default function FixedShippingCostInput(props) {
    const {inputId, labelValue, inputType,onInput} = {...props};
    
    return (
        <label htmlFor={inputId} className="form-input">
            {labelValue}: <br/>
            <input type={inputType} id={inputId} onInput={onInput} min={0}  className="shippingCost-input" />
          
        </label>
    )
    
};
