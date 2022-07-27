import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import { FcMenu } from "react-icons/fc";

export const Nav = styled.nav`

    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 700; 
    background-color: #CFB79B;

    `

export const NavLink = styled(Link)`

    font-size: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
font-size: 19px;
border: none;
background-color: #CFB79B;
margin-left: 10px;
    
    @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
}
    `

export const NavIcon = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 0; 
    cursor: pointer
    color: #fff;
    
    
    p {
        transform: translate (-175%, 100%);
        font-weight: bold;
        color: white;
    }
    `
export const Bars = styled(FcMenu)`

display: none;
    @media screen and (max-width: 650px) {
        display: inline;
        font-size: 2rem;
    color: white;,
    transform: translate (-50%, -15%);
    filter: hue-rotate(150deg);
    transform: rotate(180deg);
    height:40px;
    width: 40px;
    }
    `

    export const Img = styled(Link)`
    height: 30px;
    width: 30px;
    margin-left: 20px;
    `
    export const BlocMenu = styled.div`
    display: flex;
    margin-right:20px;
    flex-direction: column;
    border : 1px solid #BAA48B;
    border-radius: 5px;

    &:hover {
        border: 3px solid #BAA48B;
        border-radius: 5px;
    }

    @media screen and (min-width: 650px) {
   display: none;
}
    `
export const Menu1 = styled.div`
    width: 30px;
    height: 2px;
    margin: 5px;
    border-radius: 50px;
    background-color: #5D5346;
`

export const Menu2 = styled.div`
    width: 30px;
    height: 2px;
    margin: 5px;
    border-radius: 50px;
    background-color: #5D5346;
`
export const Menu3 = styled.div` 
    width: 30px;
    height: 2px;
    margin: 5px;
    border-radius: 50px;
    background-color: #5D5346;
`
export const NavBloc = styled.div`
display: flex;

    @media screen and (max-width: 650px) {
   display: none;
}
`


export const NavIcons = styled.div`
display: flex;
position: absolute;
right: 20px;
@media screen and (max-width: 650px) {
   display: none;
}

`

