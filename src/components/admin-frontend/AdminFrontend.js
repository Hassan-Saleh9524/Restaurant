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
        restaurantName: 'رستوران سارای',
        restaurantAddress: 'تهران، خیابان 15 خرداد، کوچه ی هفت تن',
        mobileNumbers: ['00000', '11111', '22222'],
        workingTime: '7 صبح تا 22 شب',
        activeDates: 'همه روزه جز جمعه ها',
        shippingCost: '12 هزار تومان'
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
