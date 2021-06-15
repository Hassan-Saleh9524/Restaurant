import PanelItem from './PanelItem';
import './AdminPanel.css';
export default function AdminPanel() {
    const toggleSections =() => {
        alert('hi')
    }
    return (
 
        <aside className="admin-panel">
            <PanelItem 
                        itemTitle="رستوران من" 
                        itemClassName="userIcon"
                        handleClick={toggleSections}
                        />
            <PanelItem 
                        itemTitle="غذاها" 
                        itemClassName="cakeIcon"
                        handleClick={toggleSections}
                        />
            <PanelItem 
                        itemTitle="کوپن ها" 
                        itemClassName="cashIcon"
                        handleClick={toggleSections}
                        />
            <PanelItem 
                        itemTitle="ثبت غذای جدید" 
                        itemClassName="plusIcon"
                        handleClick={toggleSections}
                        />
        </aside>
    
    )
}
