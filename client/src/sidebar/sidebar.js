import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Meetings',
    path: '/',
    icon: <RiIcons.RiContactsFill/>,
    cName: 'nav-text',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
    
      {
        title: 'Calls',
        path: '/',
        icon: <RiIcons.RiVideoAddFill/>
      },
      {
        title: 'Chats',
        path: '/',
        icon: <RiIcons.RiMessage2Fill/>
      }
    ]
  },
  {
    title: 'Scheduler',
    path: '/',
    icon: <IoIcons.IoMdTimer/>,
    cName: 'nav-text'
  },
 
  {
    title: 'Calendar',
    path: '/',
    icon: <FaIcons.FaCalendar />,
    cName: 'nav-text'
  },
  
  {
    title: 'CGPA Predictor',
    path: '/',
    icon: <FaIcons.FaCalculator/>,
    cName: 'nav-text'
  },
  {
    title: 'Polls',
    path: '/',
    icon: <FaIcons.FaPoll />,
    cName: 'nav-text'
  },
  
  {
    title: 'Support',
    path: '/',

    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];