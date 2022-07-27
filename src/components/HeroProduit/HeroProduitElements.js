import styled from 'styled-components';
import ImgBg from '../../images/banniere_contact.PNG';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  width: 100%;
  height: 50vh;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 650px) {
   height: 30vh;
  }
`;

export const HeroContent = styled.div`
  height: 50px;
  width:99.1vw;
  font-size: 50px;
  max-height: 100%;
  color: white;
  position: relative;
  top: 100px;
text-align:center;
background-color: #cfb79ba9;
text-shadow: 1px 1px 5px black;
@media screen and (max-width: 650px) {
   font-size: 20px;
   top: 20px;
   height:40px;
  }
`;

export const HeroContent2 = styled.div`
  height: 70px;
  width:99.1vw;
  font-size: 38px;
  max-height: 100%;
  color: white;
  position: relative;
  top: 100px;
margin-bottom: 20px;
  text-align:center;
  background-color: #cfb79ba9;
  text-shadow: 1px 1px 5px black;
  @media screen and (max-width: 650px) {
   font-size: 20px;
   top: 20px;
   height:40px;
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e31837;
  letter-spacing: 3px;
  
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;