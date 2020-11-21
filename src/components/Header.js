import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import styled from 'styled-components';

const StyledHeader = styled.header`
   display:flex;
   align-items:center;
    background-color:#02101f;
    color:#fff;
    img{
        height:30px;
        border:1px solid red;
    }
    a{
        color:#fff;
        margin-left:30px;
        &.xxx{
            color:red;
            border-bottom:1px solid red;
        }
    }
`


function Header() {
    return (
        <StyledHeader>
            <img src={logo} alt="xxx" />
            <nav>
                <NavLink to="/home" activeClassName="xxx" >首页</NavLink>
                <NavLink to="/about" activeClassName="xxx" >关于</NavLink>
                <NavLink to="/history" activeClassName="xxx" >历史</NavLink>
            </nav>
        </StyledHeader>
    )
}
export default Header