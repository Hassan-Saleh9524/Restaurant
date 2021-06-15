export default function NewFoodSection() {
    return(
        <section className="newFood-section panel-section">
            <form>
            <label htmlFor="nameOf-newFood" className="form-input">
                نام غذا:  <br />
                            <input type="text" id="nameOf-newFood" />
            </label>
            <label htmlFor="nameOf-restaurant" className="form-input">
                نام رستوران: <br />
                    <input type="text" id="nameOf-restaurant" />
            </label>
            <label htmlFor="newFood-price" className="form-input">
                    قیمت هر غذا به ریال: <br />
                    <input type="number" id="newFood-price" />
            </label>
            <label htmlFor="newFood-inventory" className="form-input">
                    تعداد موجودی:  <br />
                    <input type="number" id="newFood-inventory" />
            </label>
            <button type="button" className="create-newFood-btn">اضافه کن</button>

            </form>
        </section>
    )
}