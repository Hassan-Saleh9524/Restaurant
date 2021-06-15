
import { useContext } from "react";
import { SectionsContext } from "../SectionsContext";
const userIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hero-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>;

const cakeIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hero-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
</svg>;

const cashIcon =<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hero-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>

const plusIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hero-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>

const heroIcons = {userIcon, cakeIcon, cashIcon, plusIcon};

export default function PanelItem(props) {
    const [section, setSection] = useContext(SectionsContext);
    const {itemTitle,itemClassName} = { ...props };

    const selectedIcon = heroIcons[itemClassName]
        return (
            <div className="panel-item" onClick={()=> setSection(section+section)}>
                {selectedIcon}
                <h3>{itemTitle}</h3>
            </div>
       
    )
}