import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />, 
        cName: 'nav-text'
    },
    {
        title: 'Tutorials',
        path: '/about',
        icon: <AiIcons.AiOutlineRead />,
        cName: 'nav-text'
    },
    {
        title: 'Scanner',
        path: '/scanner',
        icon: <BsIcons.BsUpcScan />, 
        cName: 'nav-text'
    },
    {
        title: 'Solver',
        path: '/solver',
        icon: <BsIcons.BsLightbulb />, 
        cName: 'nav-text'
    }
]