import React from "react";
import {
  FooterGrid,
  FooterSpecialite,
  FooterAide,
  FooterPandaTea,
  FooterReseau,
  FooterF1,
  FooterF2,
} from "./FooterElements";
import Logo1 from "../../images/logo1.svg";
import Logo2 from "../../images/logo2.svg";
import Logo3 from "../../images/logo3.svg";



export default function Footer() {
  return (
    <>
      <FooterGrid>
        <FooterSpecialite>
          <FooterF1>NOS SPECIALITÉS</FooterF1>
          <FooterF2>LOCALES</FooterF2>
          <FooterF2>NATIONALES</FooterF2>
          <FooterF2>LE MONDE</FooterF2>
        </FooterSpecialite>
        <FooterAide>
          <FooterF1>AIDE</FooterF1>
          <FooterF2>FAQ</FooterF2>
          <FooterF2>MENTIONS LÉGALES</FooterF2>
          {/* <FooterF2><Link> "https://google.fr"</Link></FooterF2> -CONTACT- */}
        </FooterAide>
        <FooterPandaTea>
          <FooterF1>PANDA TEA</FooterF1>
          {/* <FooterF2><Link> "https://google.fr"</Link></FooterF2> -NOS PACKS- */}
          <FooterF2>PRESSE</FooterF2>
          {/* <FooterF2><Link> "https://google.fr"</Link></FooterF2> -A PROPOS- */}
          {/* <FooterF2><Link> "https://google.fr"</Link></FooterF2> -FORUMS- */}
        </FooterPandaTea>
        <FooterReseau>
          <FooterF1>SUIVEZ-NOUS SUR LES RÉSEAUX SOCIAUX</FooterF1>
          <img src={Logo2} alt="instagram" />
          <img src={Logo1} alt="facebook" />
          <img src={Logo3} alt="pinterest" />
        </FooterReseau>
      </FooterGrid>
    </>
  );
}
