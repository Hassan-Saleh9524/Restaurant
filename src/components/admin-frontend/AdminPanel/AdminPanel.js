import PanelItem from './PanelItem';
import './AdminPanel.css';
export default function AdminPanel() {
    return (
        <aside className="admin-panel">
            <PanelItem 
                        itemTitle="رستوران من" 
                        itemClassName="userIcon"
                        />
            <PanelItem 
                        itemTitle="غذاها" 
                        itemClassName="cakeIcon"
                        />
            <PanelItem 
                        itemTitle="کوپن ها" 
                        itemClassName="cashIcon"
                        />
            <PanelItem 
                        itemTitle="ثبت غذای جدید" 
                        itemClassName="plusIcon"
                        />
        </aside>
    )
}
