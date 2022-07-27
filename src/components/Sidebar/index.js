import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/PageProduits'>Nos Produits</SidebarLink>
        <SidebarLink to='/PagePacks'>Nos Packs </SidebarLink>
        <SidebarLink to='/PagePropos'>A propos </SidebarLink>   
         <SidebarLink to='/'>Forum </SidebarLink>
        <SidebarLink to='/'>Contact </SidebarLink>

      </SidebarMenu>

    </SidebarContainer>
  );
};

export default Sidebar;