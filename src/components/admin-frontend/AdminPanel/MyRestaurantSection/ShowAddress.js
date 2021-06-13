import React, {useContext} from "react";
import { AdminContext } from "../../AdminContext";
const locationIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hero-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>;

export default function ShowAddress() {
    const context = useContext(AdminContext);
    return (
        <address className="restaurant-detail-item">
            {locationIcon} 
            {context.restaurantAddress}
        </address>
    )
} 