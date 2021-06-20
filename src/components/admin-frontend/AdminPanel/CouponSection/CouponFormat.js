export default function CouponFormat(props) {
    const { foodName, foodCount, discountRate, formatType, freeRate, onClick,id} = { ...props };
    switch (formatType) {
        case 'format-one':
            return (
                <div className="coupon-format format-one"  >
                    <button className="close-btn" type="button" onClick={()=>onClick(id)}>&times;</button>
                    <div>
                        به ازای خرید هر <span className="highlight"> {foodCount} </span> پرس از<span className="highlight">  {foodName} </span>، <span className="highlight"> {discountRate} % </span> تخفیف اعمال میشود.
                    </div>
                </div>
            );
        default:
            return (

                
                <div className="coupon-format format-two" >
                    <button className="close-btn" type="button" onClick={(()=>onClick(id))}>&times;</button>
                    <div>
                        خرید بالای<span className="highlight"> {freeRate} </span>ریال، هزینه ی سس و نوشابه رایگان !
                    </div>
                </div>
            )
    }

}