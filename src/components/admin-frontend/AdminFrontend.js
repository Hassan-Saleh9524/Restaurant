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
    const [ section, setSection ] = useState(0);
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
                <h2>{section}</h2>
            </header>
            <AdminSignUp />

            <div className="panel-section-container">
                <AdminContext.Provider value={default_restaurant_datails}>
                    <SectionsContext.Provider value={[section, setSection]} >
                        <AdminPanel />
                    </SectionsContext.Provider>
                    <MyRestaurantSection />

                </AdminContext.Provider>
                <FoodSection />
                <CouponSection />
                <NewFoodSection />
            </div>

        </main>
    )
};
