import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  background: #fff;
  color: #000;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 350px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  margin: 0 25px 

`;

export const ProductsHeading = styled.h1`
  font-size: 14px;
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 20px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background:#F3F3F3;
  margin: 0 auto 10px;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  font-size: 12px;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 14px;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #CFB79B;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;