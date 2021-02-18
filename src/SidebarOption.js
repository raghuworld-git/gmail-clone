import React from 'react';
import './SidebarOption.css';

const SidebarOption = ({ icon, title, number }) => {
    return (
        <div className='sidebarOption'>
            {icon}
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
