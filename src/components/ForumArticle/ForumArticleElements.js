import styled from "styled-components";


export const SectionArticle = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 6;
  margin: 15vh 5% 3% 5%;
`;
export const ArcticleArticle = styled.div`
  grid-column: span 2;
  grid-row: 1;
  background-color: #f2e2ce;
  padding: 5%;
`;

export const ArcticleT1 = styled.h2`
  font-family: bold "Intel", sans-serif;
  font-size: 20px;

  @media (min-width: 1000px) {
    font-size: 22px;
  }
  @media (min-width: 1500px) {
    font-size: 30px;
  }
`;
export const ArcticleT2 = styled.p`
  font-family: "Intel", sans-serif;
  font-size: 12px;
  text-align: justify;
  padding-left: 5vh;

  @media (min-width: 1000px) {
    font-size: 15px;
  }
  @media (min-width: 1500px) {
    font-size: 20px;
  }
`;
