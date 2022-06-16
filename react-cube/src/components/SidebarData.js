import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from "react-icons/bs";
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />, 
        cName: 'nav-text'
    },
    {
        title: 'To know',
        path: '/about',
        icon: <AiIcons.AiOutlineRead />,
        cName: 'nav-text'
    },
    {
        title: 'Solve the shuffle',
        path: '/manual-solver',
        icon: <BsIcons.BsLightbulb />, 
        cName: 'nav-text'
    },
    {
        title: 'Scanner',
        path: '/scanner',
        icon: <BsIcons.BsUpcScan />, 
        cName: 'nav-text'
    },
    {
        title: 'Smart Solver',
        path: '/solver',
        icon: <GiIcons.GiBrain />, 
        cName: 'nav-text'
    }
]