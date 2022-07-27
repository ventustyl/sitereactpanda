import styled from 'styled-components';
import Image1 from '../../images/detox-slim-fit.jpg';
import Image3 from '../../images/infusions_animaux_540x.jpg';
import Image2 from '../../images/instagram-feed4_360x.jpg';

export const FeatureGlobal = styled.div`
padding-top: 50px;
width: 70%;
margin: auto;
`
export const FeatureH2 = styled.h2`
    font-family: bold "Intel", sans-serif;
    font-size: 20px;
    text-align: center;
`
export const FeatureP = styled.p`
    font-family: "Intel", sans-serif;
    font-size: 17px;
    text-align: center;
`
export const FeatureDiv = styled.div`
margin: auto;
    text-align: center;     

`
export const FeatureBlock = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;

    @media (min-width: 790px){
        flex-direction: row;
        margin: auto;
        text-align:center;
        width:100%;
    }
`
export const FeatureBlock1 = styled.div`
    background-image: url(${Image1});
    background-size: cover;
    background-position:center;
    width: 50vh;
    margin 2%;  
    justify-content:center;
`
export const FeatureBlockText1 = styled.p`
    postion:absolute;
    margin: 40% 2% 2% 2%;
    transform: translate (-50%,-50%); 
    background-color: rgba(255, 255, 255, 0.575);
`
export const FeatureBlockText11 =styled.p`
    font-family: bold "Intel", sans-serif;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0%;
`
export const FeatureBlockText12 = styled.p`
    font-family: bold "Intel", sans-serif;
    font-size: 12px;
    text-align: center;
    margin-bottom: 0%;
`
export const FeatureBlock2 = styled.div`
    background-image: url(${Image2});
    background-size: cover;
    background-position:center;
    width: 50vh;
    margin 2%;  
`
export const FeatureBlockText2 = styled.p`
    postion:absolute;
    margin: 40% 2% 2% 2%;
    transform: translate (-50%,-50%); 
    background-color: rgba(255, 255, 255, 0.575);
`
export const FeatureBlockText21 =styled.p`
    font-family: bold "Intel", sans-serif;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0%;
`
export const FeatureBlockText22 = styled.p`
    font-family: bold "Intel", sans-serif;
    font-size: 12px;
    text-align: center;
    margin-bottom: 0%;
`
export const FeatureBlock3 = styled.div`
    background-image: url(${Image3});
    background-size: cover;
    background-position:center;
    width: 50vh;
   
    margin 2%;  
`
export const FeatureBlockText3 = styled.p`
    postion:absolute;
    margin: 40% 2% 2% 2%;
    transform: translate (-50%,-50%); 
    background-color: rgba(255, 255, 255, 0.575);
`
export const FeatureBlockText31 =styled.p`
    font-family: bold "Intel", sans-serif;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0%;
`
export const FeatureBlockText32 = styled.p`
    font-family: bold "Intel", sans-serif;
    font-size: 12px;
    text-align: center;
    margin-bottom: 0%;
`