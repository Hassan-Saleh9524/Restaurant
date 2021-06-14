import background from '../../../../asset/images/kebab-background.jpg';
import FoodToolbar from "./FoodToolbar";

export default function FoodItem() {
    return (
        <div className="food-item">
            <img src={background} alt="عکس غذا" className="food-img" />
            <strong className="food-name">کباب سلطانی با پلو با فلان و بسار 15 عدد رب گوچه</strong>
            <p className="food-restaurantName">رستوران سارای</p>
            <footer>
                <div>
                    تعداد:
                    <span className="food-count">14</span>
                </div>

                <strong className="food-price">12,000</strong>
            </footer>
        
            <FoodToolbar />
        </div>
    )
}