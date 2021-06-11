export default function FixedShippingCostInput(props) {
    const {inputId, labelValue, inputType} = {...props};

    return (
        <label htmlFor={inputId} className="form-input">
            {labelValue}: <br/>
            <input type={inputType} id={inputId} className="shippingCost-input" />
          
        </label>
    )
    
};
