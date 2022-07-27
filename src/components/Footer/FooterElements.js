import styled from "styled-components";
// import { Link } from "react-router-dom";
// export const Link = styled(Link)``;

export const FooterGrid = styled.div`
  display: grid;
  width: 60%;
  margin: auto;
  grid-template-columns: 3;
  grid-template-rows: 2;
  padding: 2%;
  @media (min-width: 1200px) {
    grid-template-columns: 4;
  }
`;

export const FooterSpecialite = styled.div`
  grid-column: 1;
  grid-row: 1;
`;
export const FooterAide = styled.div`
  grid-column: 2;
  grid-row: 1;
`;
export const FooterPandaTea = styled.div`
  grid-column: 3;
  grid-row: 1;
`;
export const FooterReseau = styled.div`
  grid-column: span 3;
  grid-row: 2;
  padding-bottom: 5%;
  text-align: center;

  @media (min-width: 1200px) {
    grid-column: 4;
    grid-row: 1;
  }
`;

export const FooterF1 = styled.p`
  font-family: "Intel", sans-serif;
  font-size: 15px;
  font-weight: bold;
`;

export const FooterF2 = styled.p`
  font-family: "Intel", sans-serif;
  font-size: 15px;
  color: black;
`;

export const a = styled.a`
  color: red;
`;
// import const FooterDiv = styled.(/*h2 ou p ou div*/)
