import React,{useState} from 'react';
import CouponFormat from './CouponFormat';
export default function CouponSection() {
    
    const [couponFormats, setCouponFormats] = useState([]);
    const addCouponForamt =(event)=> {
        let coupon_freeRate= document.querySelector('#coupon-freeRate').value;
        let coupon_foodCount = document.querySelector('#coupon-foodCount').value;
        let coupon_foodName= document.querySelector('#coupon-foodName').value;
        let coupon_discountRate= document.querySelector('#coupon-discountRate').value;

        let isFormatOne= event.target.classList.contains('format-one'); // to determinate create coupon instanse form format-one or format-two
        if (isFormatOne) {
            
            setCouponFormats([
                ...couponFormats,
                <CouponFormat foodCount={coupon_foodCount}
                              foodName={coupon_foodName}
                              discountRate={coupon_discountRate}
                              formatType="format-one" 
                              key={new Date().getTime()}/> // use time for create unique key 
            ])
        }else { // that means it is format-two
            
            setCouponFormats([
                ...couponFormats,
                <CouponFormat freeRate={coupon_freeRate}
                              formatType="format-Two" 
                              key={new Date().getTime()}
                              />
            ])
        }
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
                        <input type="number" id="coupon-foodCount" min={1} />
                    </label>
                    <label htmlFor="coupon-foodName" className="form-input">
                        نام غذا:
                        <select id="coupon-foodName">
                            <option value="کباب سلطانی">
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
                        <input type="number" id="coupon-discountRate" min={0} />
                    </label>
                    <button type="button" className="create-coupon-btn format-one" onClick={addCouponForamt}>ایجاد</button>
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
                        <input type="number" id="coupon-freeRate" min={0} />
                    </label>
                    <button type="button" className="create-coupon-btn format-two" onClick={addCouponForamt}>ایجاد</button>
                </div>
                {couponFormats}
            
            </form>
        </section>
    )
}