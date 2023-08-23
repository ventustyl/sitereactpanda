import React from "react";
import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  Img,
  NavBloc,
  NavIcons,
} from "./NavbarElements";
import Image from "../../images/compte-panda-tea.svg";
import Compte from "../../images/compte.png";
import Panier from "../../images/panier.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavIcon onClick={toggle}>
          <p></p>
          <Bars />
        </NavIcon>
        <Img to="/" isOpen={false}>
          <img
            src={Image}
            width="30"
            height="30"
            alt="panda"
            to="/sitereactpanda/"
          />
        </Img>
        <NavBloc>
          <NavLink to="/sitereactpanda/PageProduits">Nos produits</NavLink>
          <NavLink to="/sitereactpanda/PagePacks">Nos packs</NavLink>
          <NavLink to="/sitereactpanda/PagePropos">A propos</NavLink>
          <NavLink to="/sitereactpanda/PageForum">Forum</NavLink>
          <NavLink to="/sitereactpanda/PageContact">Contact</NavLink>
        </NavBloc>
        <NavIcons>
          <img src={Compte} width="30" height="30" alt="panda" path="/" />
          <img src={Panier} width="30" height="30" alt="panda" path="/" />
        </NavIcons>
      </Nav>
    </>
  );
};

export default Navbar;
