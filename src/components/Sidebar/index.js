import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideIcon,
} from "./SidebarElements";

import Compte from "../../images/compte.png";
import Panier from "../../images/panier.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/sitereactpanda/PageProduits">
          Nos Produits
        </SidebarLink>
        <SidebarLink to="/sitereactpanda/PagePacks">Nos Packs </SidebarLink>
        <SidebarLink to="/sitereactpanda/PagePropos">A propos </SidebarLink>
        <SidebarLink to="/sitereactpanda/PageForum">Forum </SidebarLink>
        <SidebarLink to="/sitereactpanda/PageContact">Contact </SidebarLink>
        <SideIcon>
          <img src={Compte} width="30" height="30" alt="panda" path="/" />
          <img src={Panier} width="30" height="30" alt="panda" path="/" />
        </SideIcon>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
