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
    const default_restaurant_datails =
    {
        restaurantName: 'نام رستوران',
        restaurantAddress: 'آدرس رستوران اینجا قرار میگیرد',
        mobileNumbers: ['09123456789', '0000'],
        workingTime: 'از ساعت فلان تا ساعت بسار',
        activeDates: 'همه ی روز ها',
        shippingCost: 'فلان قدر تومان'
    };
    let activeSection=null;
    const [section, setSection] = useState(0);
    const [restaurantContext, setRestaurantContext] = useState(default_restaurant_datails);

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
    

    return (
        <main className="admin-main">
            <header className="admin-header">
                <h1>ثبت نام مدیر رستوران</h1>

            </header>
            <AdminContext.Provider value={[restaurantContext,setRestaurantContext]} >

            <AdminSignUp />
            </AdminContext.Provider>

            <div className="panel-section-container">
                    <SectionsContext.Provider value={[setSection]} >
                        <AdminPanel />
                    </SectionsContext.Provider>
                <AdminContext.Provider value={restaurantContext}>


                   {activeSection}
                </AdminContext.Provider>
            </div>

        </main>
    )
};
