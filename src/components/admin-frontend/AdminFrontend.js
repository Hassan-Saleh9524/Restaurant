import AdminSignUp from './AdminSignUp/AdminSignUp';
import AdminPanel from './AdminPanel/AdminPanel';
import MyRestaurantSection from './AdminPanel/MyRestaurantSection';
import './AdminFrontend.css';

export default function AdminFrontend() {
    return (
       <main className="admin-main">
        <header className="admin-header">
        <h1>ثبت نام مدیر رستوران</h1>
        </header>
        <AdminSignUp />

        <div className="panel-section-container">
        <AdminPanel />
        <MyRestaurantSection />
        </div>
       </main>
    )
};
