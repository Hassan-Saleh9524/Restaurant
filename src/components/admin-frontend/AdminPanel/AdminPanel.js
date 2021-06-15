import React from 'react';
import PanelItem from './PanelItem';
import './AdminPanel.css';
export default function AdminPanel() {

    const toggleActiveItem = (event) => {
        let actived_item = document.querySelector('.panel-item.active');
            if (actived_item) {
                actived_item.classList.remove('active')
            }
            
        
        event.currentTarget.classList.add('active');
    }
    return (

        <aside className="admin-panel">
            <PanelItem
                itemTitle="رستوران من"
                itemClassName="userIcon"
                targetSection="myRestaurant-section"
                onClick={toggleActiveItem}
                
            />
            <PanelItem
                itemTitle="غذاها"
                itemClassName="cakeIcon"
                targetSection="food-section"
                onClick={toggleActiveItem}
            />
            <PanelItem
                itemTitle="کوپن ها"
                itemClassName="cashIcon"
                targetSection="coupon-section"
                onClick={toggleActiveItem}
            />
            <PanelItem
                itemTitle="ثبت غذای جدید"
                itemClassName="plusIcon"
                targetSection="newFood-section"
                onClick={toggleActiveItem}
            />
        </aside>

    )
}
