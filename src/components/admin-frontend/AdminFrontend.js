import React, { useState } from 'react';

import AdminSignUp from './AdminSignUp/AdminSignUp';
import AdminPanel from './AdminPanel/AdminPanel';
import MyRestaurantSection from './AdminPanel/MyRestaurantSection/MyRestaurantSection';
import FoodSection from './AdminPanel/FoodSection/FoodSection';
import NewFoodSection from './AdminPanel/NewFoodSection/NewFoodSection';
import CouponSection from './AdminPanel/CouponSection/CouponSection';
import { AdminContext } from './AdminContext';
import { SectionsContext } from './SectionsContext';
import './AdminFrontend.css';

export default function AdminFrontend() {
    let activeSection=null;
    const [section, setSection] = useState(0);

    switch (section) {
        case 'newFood-section':
           activeSection =  <NewFoodSection />
            break;
        case 'myRestaurant-section':
            activeSection = <MyRestaurantSection />
            break;
        case 'food-section':
            activeSection = <FoodSection />
            break;
        case 'coupon-section':
            activeSection = <CouponSection />
            break;
        default:
            activeSection = <MyRestaurantSection />
            break;
    }
    const default_restaurant_datails =
    {
        restaurantName: 'نام رستوران',
        restaurantAddress: 'آدرس رستوران اینجا قرار میگیرد',
        mobileNumbers: ['09123456789', '0213565502'],
        workingTime: 'از ساعت فلان تا ساعت بسار',
        activeDates: 'همه ی روز ها',
        shippingCost: 'فلان قدر تومان'
    };

    return (
        <main className="admin-main">
            <header className="admin-header">
                <h1>ثبت نام مدیر رستوران</h1>

            </header>
            <AdminSignUp />

            <div className="panel-section-container">
                <AdminContext.Provider value={default_restaurant_datails}>
                    <SectionsContext.Provider value={[setSection]} >
                        <AdminPanel />
                    </SectionsContext.Provider>


                   {activeSection}
                </AdminContext.Provider>
            </div>

        </main>
    )
};
