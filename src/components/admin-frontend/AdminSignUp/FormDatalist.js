export default function FormDatalist(props) {
    const {inputId, labelValue,optionsValue,onInput} = {...props};

    return (
        <label htmlFor={inputId} className="form-input">
            {labelValue}: <br/>
            <input list={inputId} name={inputId} onInput={onInput}/>
            <datalist id={inputId} >
                {
                    optionsValue.map((option, i)=>{
                       return <option key={i} value={option}></option>
                    })
                }
            </datalist>
          
        </label>
    )
    
};