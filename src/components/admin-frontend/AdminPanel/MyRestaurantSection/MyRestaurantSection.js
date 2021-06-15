import React, {useContext} from "react";
import ShowAddress from './ShowAddress';
import ShowMobileNumbers from './ShowMobileNumbers';
import { AdminContext } from "../../AdminContext";

export default function MyRestaurantSection() {
        const context = useContext(AdminContext);

        return (
            <section className="myRestaurant-section panel-section">
                <h2 className="restaurant-name">{context.restaurantName}</h2>
                <ShowAddress />
                <ShowMobileNumbers />
                <div className="our-location-service">
                    <span>مناطق سرویس دهی ما:</span> 
                    <iframe title="my services location">map</iframe>
                </div>
                <div className="restaurant-detail-item">
                ساعات کاری: 
                <span className="details-span">
                    {context.workingTime}
                </span>
                </div>
                <div className="restaurant-detail-item">
                روزهای فعالیت:
                <span className="details-span">
                    {context.activeDates}
                </span> 
                </div>
                <div className="restaurant-detail-item">
                هزینه ثابت ارسال غذا:
                <span className="details-span">
                    {context.shippingCost}
                </span>
                </div>
            </section>
       
    )
}