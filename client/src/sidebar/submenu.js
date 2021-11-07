import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
 
const SidebarLink = styled(Link)`
  display: flex;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  justify-content: space-between;
  align-items: center;
  color: #8e4555;
  list-style: none;
  height: 60px;
  text-decoration: none;
 font-weight: bold;
  
  font-size: 18px;
  &:hover {
    background: #c67786;
    border-left: 4px solid #c67786;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`

`;

const DropdownLink = styled(Link)`
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 40px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #8e4555;
  font-size: 18px;
  &:hover {
    background: #c67786;;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav} onMouseEnter={item.subNav && showSubnav} >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;