import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap
} from './SidebarElements';
//import {Link} from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/louisa_drinks">Drinks</SidebarLink>
        <SidebarLink to="/louisa_foods">Desserts</SidebarLink>
        <SidebarLink to='/'>WebSide</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
