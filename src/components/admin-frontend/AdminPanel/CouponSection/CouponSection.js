import { useState } from 'react';
import CouponFormat from './CouponFormat';
export default function CouponSection() {
    const [couponArray, setCouponArray] = useState([]);
    const [coupon, setCoupon] = useState({
        foodCount: '',
        foodName: '',
        discountRate: '',
        formatType: '',
        onClick: '',
        freeRate: ''
    });
    const handleFoodCount = (event) => {
        let current_count = event.target.value;
        setCoupon({
            ...coupon,
            foodCount: current_count
        })
    }
    const handleFoodName = (event) => {
        let current_name = event.target.value;
        setCoupon({
            ...coupon,
            foodName: current_name
        })
    }
    const handleDiscountRate = (event) => {
        let current_discount = event.target.value;
        setCoupon({
            ...coupon,
            discountRate: current_discount
        })
    }
    const handleFreeRate = (event) => {
        let current_freeRate = event.target.value;
        setCoupon({
            ...coupon,
            freeRate: current_freeRate
        })
    }
    function addCouponForamt(formatType) {
    

        setCouponArray(
            [...couponArray,
            {
                ...coupon,
                formatType: formatType,
                id: new Date().getTime()
            }]
        )        
    }
    function removeCouponFormat(id) {
       
       setCouponArray(

           couponArray.filter(coupon=> {
               return coupon.id !== id
            })
            ) 
        

    }
    return (
        <section className="coupon-section panel-section">
            <form>

                <div className="coupon-format format-one">
                    فرمت اول:
                    <div>
                        به ازای خرید هر <span className="highlight">تعداد</span> پرس از<span className="highlight"> نام غذا </span>، <span className="highlight">میزان درصد%</span> تخفیف اعمال میشود.
                    </div>
                </div>
                <div className="insert-coupon">
                    <label htmlFor="coupon-foodCount" className="form-input">
                        تعداد:
                        <input type="number" id="coupon-foodCount" min={1} onInput={handleFoodCount} />
                    </label>
                    <label htmlFor="coupon-foodName" className="form-input">
                        نام غذا:
                        <select id="coupon-foodName" onInput={handleFoodName}>
                            <option value="کباب سلطانی" defaultChecked>
                                کباب سلطانی
                            </option>
                            <option value="کباب بختیاری">
                                کباب بختیاری
                            </option>
                            <option value="خورشت آلو">
                                خورشت آلو
                            </option>
                        </select>
                    </label>
                    <label htmlFor="coupon-discountRate" className="form-input">
                        میزان تخفیف به درصد:
                        <input type="number" id="coupon-discountRate" min={0} onInput={handleDiscountRate} />
                    </label>
                    <button type="button" className="create-coupon-btn format-one" onClick={() => addCouponForamt('format-one')}>ایجاد</button>
                </div>
                <div className="coupon-format format-two">
                    فرمت دوم:
                    <div>
                        خرید بالای<span className="highlight"> میزان هزینه </span>، هزینه ی سس و نوشابه رایگان!
                    </div>
                </div>
                <div className="insert-coupon">

                    <label htmlFor="coupon-freeRate" className="form-input">
                        میزان هزینه به ریال:
                        <input type="number" id="coupon-freeRate" min={0} onInput={handleFreeRate} />
                    </label>
                    <button type="button" className="create-coupon-btn format-two" onClick={() => addCouponForamt('format-two')}>ایجاد</button>
                </div>


                {

                    couponArray.map((coupon, index) => {
                        return <CouponFormat foodCount={coupon.foodCount}
                            foodName={coupon.foodName}
                            discountRate={coupon.discountRate}
                            formatType={coupon.formatType}
                            onClick={removeCouponFormat}
                            key={index}
                            id={coupon.id}
                            freeRate={coupon.freeRate}
                        />
                    })
                }



            </form>
        </section>
    )
}