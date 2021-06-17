export default function AddMobileNumber(props) {

    return (
        <div className="added-numbers" onClick={props.onClick}>
                {props.number}
        </div>
    )
}
