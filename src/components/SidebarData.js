import React from 'react'
import BagReceiveIcon from '@mui/icons-material/WorkOutlineOutlined';
import BagOpenIcon from '@mui/icons-material/BusinessCenter';
import BagIcon from '@mui/icons-material/Work';




export const SidebarData = [
    {
        title: "Bag Receive",
        icon: <BagReceiveIcon />,
        link: "BagReceive"
    },
    {
        title: "Bag Open",
        icon: <BagOpenIcon />,
        link: "BagOpen"
    },
    {
        title: "Bag Close",
        icon: <BagIcon />,
        link: "BagClose"
    },
    {
        title: "Bag Dispatch",
        icon: <BagIcon />,
        link: "BagDispatch"
    }

    

]

export default SidebarData