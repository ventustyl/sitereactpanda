import styled from 'styled-components';
import Image1 from '../../images/accueil/matchalate2.png';
import Image2 from '../../images/accueil/fouet_matcha.jpg';

export const Feature2Global = styled.div`
width: 70%;
margin: auto;
`

export const Sele = styled.p`
font-family: "Intel", sans-serif;
font-size: 20px;
font-weight: 500;
line-height: 1.2;
margin-top: 0;
margin-bottom: .5rem;
`;
export const Ali = styled.p`
display: flex;
margin-left: 12%;
font-size: 20px;
`;
export const Sele1 = styled.p`
font-family: "Intel", sans-serif;
font-size: 20px;
margin-top: 0;
margin-bottom: .5rem;
line-height: 1.2;
padding-left:2%;
`;
export const Contai = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const Mat =styled.p`
font-size: 14px;
text-align: center;
font-weight: bold;
margin-top: 0px;

`;
export const Ori =styled.p`
font-size: 12px;
text-align: center;

`;
export const Fond =styled.div`
background-color: rgba(255, 255, 255, 0.575);
margin-top: 200px;
`;
export const Thema =styled.div`
background-image: url(${Image1});
background-size: cover;
width: 29%;
height: 250px;
background-position: center;
margin: auto;
  
`;
export const Thema2 =styled.div`
background-image: url(${Image2});
width: 29%;
height: 250px;
background-size: cover;
background-position: center;
margin: auto;
`;

