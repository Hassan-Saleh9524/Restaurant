export default function SubmitButton(props) {
    const {inputId,inputType,onClick} = {...props};

    return  <button className="create-restaurant-btn" onClick={onClick} type={inputType} id={inputId}> ایجاد رستوران</button>
};
