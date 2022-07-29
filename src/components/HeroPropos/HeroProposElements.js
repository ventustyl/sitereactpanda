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