export default function CouponFormat(props) {
    const { foodName, foodCount, discountRate, formatType, freeRate } = { ...props };
    switch (formatType) {
        case 'format-one':
            return (
                <div className="coupon-format format-one">
                    <div>
                        به ازای خرید هر <span className="highlight"> {foodCount} </span> پرس از<span className="highlight">  {foodName} </span>، <span className="highlight"> {discountRate} </span> تخفیف اعمال میشود.
                    </div>
                </div>
            );
        default:
            return (

                <div className="coupon-format format-two">
                    <div>
                        خرید بالای<span className="highlight"> {freeRate} </span>ریال، هزینه ی سس و نوشابه رایگان !
                    </div>
                </div>
            )
    }

}