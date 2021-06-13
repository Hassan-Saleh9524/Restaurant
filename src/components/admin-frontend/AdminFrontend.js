import AdminSignUp from './AdminSignUp/AdminSignUp';
import AdminPanel from './AdminPanel/AdminPanel';
import MyRestaurantSection from './AdminPanel/MyRestaurantSection/MyRestaurantSection';
import { AdminContext } from './AdminContext';
import './AdminFrontend.css';

export default function AdminFrontend() {
    const default_restaurant_datails = 
        {

            restaurantName: 'رستوران سارای',
        
        restaurantAddress: 'تهران، خیابان 15 خرداد، کوچه ی هفت تن',
        mobileNumbers: ['00000','11111','22222'],
        workingTime: '7 صبح تا 22 شب',
        activeDates: 'همه روزه جز جمعه ها',
        shippingCost: '12 هزار تومان'};

    return (
       <main className="admin-main">
        <header className="admin-header">
        <h1>ثبت نام مدیر رستوران</h1>
        </header>
        <AdminSignUp />

        <div className="panel-section-container">
        <AdminContext.Provider value={default_restaurant_datails}>

        <AdminPanel />
        <MyRestaurantSection />
        </AdminContext.Provider>
        </div>
       </main>
    )
};
