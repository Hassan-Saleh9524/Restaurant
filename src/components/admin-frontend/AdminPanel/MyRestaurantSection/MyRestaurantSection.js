import React, {useContext} from "react";
import ShowAddress from './ShowAddress';
import ShowMobileNumbers from './ShowMobileNumbers';
import { AdminContext } from "../../AdminContext";
const pen_icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hero-icons pen" id="penIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>

function showSignUpForm() {
    document.querySelector('.admin-signUp-form').classList.remove('close')
}
export default function MyRestaurantSection() {
        const restaurantContext = useContext(AdminContext);
        return (
            <section className="myRestaurant-section panel-section">
            <label htmlFor='penIcon' className="pen-label"  onClick={showSignUpForm}>
            {pen_icon}
            </label>
                <h2 className="restaurant-name">{restaurantContext.restaurantName}</h2>
                <ShowAddress />
                <ShowMobileNumbers />
                <div className="our-location-service">
                    <span>مناطق سرویس دهی ما:</span> 
                    <iframe title="my services location">map</iframe>
                </div>
                <div className="restaurant-detail-item">
                ساعات کاری: 
                <span className="details-span">
                    {restaurantContext.workingTime}
                </span>
                </div>
                <div className="restaurant-detail-item">
                روزهای فعالیت:
                <span className="details-span">
                    {restaurantContext.activeDates}
                </span> 
                </div>
                <div className="restaurant-detail-item">
                هزینه ثابت ارسال غذا:
                <span className="details-span">
                    {restaurantContext.shippingCost}
                    &nbsp;
                    ریال
                </span>
                </div>
            </section>
       
    )
}