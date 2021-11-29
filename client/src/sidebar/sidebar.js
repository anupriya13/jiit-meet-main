import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'College',
    path: '/',
    icon: <AiIcons.AiOutlineCodeSandbox/>,
    cName: 'nav-text',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
    
      {
        title: 'Timetable',
        path: '/',
        icon: <RiIcons.RiPieChart2Fill/>
      },
      {
        title: 'Exams',
        path: '/',
        icon: <RiIcons.RiPieChart2Fill/>
      },
      {
        title: 'Classroom',
        path: '/',
        icon: <RiIcons.RiPieChart2Fill/>
      },
      {
        title: 'Events',
        path: '/',
        icon: <RiIcons.RiPieChart2Fill/>
      },
      {
        title: 'Conference',
        path: '/',
        icon: <RiIcons.RiPieChart2Fill/>
      }
    ]
  },
  {
    title: 'Virtual Meetings',
    path: '/',
    icon: <IoIcons.IoMdAnalytics />,
    cName: 'nav-text'
  },
 
  {
    title: 'Search',
    path: '/',
    icon: <FaIcons.FaSearch />,
    cName: 'nav-text'
  },
  
  {
    title: 'Alerts',
    path: '/',
    icon: <IoIcons.IoMdAlert/>,
    cName: 'nav-text'
  },
  {
    title: 'Analytics',
    path: '/',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  
  {
    title: 'Support',
    path: '/',

    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];