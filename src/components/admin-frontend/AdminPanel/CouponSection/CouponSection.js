export default function CouponSection() {
    return (
        <section className="coupon-section panel-section">
            <form>

                <div className="coupon-format">
                    فرمت اول:
                    <div>
                        به ازای خرید هر <span className="highlight">تعداد</span> پرس از<span className="highlight"> نام غذا </span>، <span className="highlight">میزان درصد%</span> تخفیف اعمال میشود.
                    </div>
                </div>
                <div className="insert-coupon">


                    <label htmlFor="coupon-foodCount" className="form-input">
                        تعداد:
                        <input type="number" id="coupon-foodCount" />
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
                        <input type="number" id="coupon-discountRate" />
                    </label>
                    <button type="button" className="create-coupon-btn format-one">ایجاد</button>
                </div>
                <div className="coupon-format">
                    فرمت دوم:
                    <div>
                        خرید بالای<span className="highlight"> میزان هزینه </span>، هزینه ی سس و نوشابه رایگان! 
                    </div>
                </div>
                <div className="insert-coupon">
                        
                    <label htmlFor="coupon-freeRate" className="form-input">
                        میزان هزینه به ریال: 
                        <input type="number" id="coupon-freeRate" />
                    </label>
                    <button type="button" className="create-coupon-btn format-two">ایجاد</button>
                </div>
            
            </form>
        </section>
    )
}