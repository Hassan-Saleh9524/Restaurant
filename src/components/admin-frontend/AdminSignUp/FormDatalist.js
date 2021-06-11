export default function FormDatalist(props) {
    const {inputId, labelValue,optionsValue} = {...props};

    return (
        <label htmlFor={inputId} className="form-input">
            {labelValue}: <br/>
            <input list={inputId} name={inputId}/>
            <datalist id={inputId}>
                {
                    optionsValue.map((option, i)=>{
                       return <option key={i} value={option}></option>
                    })
                }
            </datalist>
          
        </label>
    )
    
};