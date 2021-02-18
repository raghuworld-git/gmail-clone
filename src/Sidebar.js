import { Button } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

import SidebarOption from './SidebarOption'

import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize='large' />} className='sidebar__compose'>Compose</Button>

            <SidebarOption icon={<InboxIcon />} title='Inbox' number={50} />
        </div>
    )
}

export default Sidebar
