import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button } from 'antd'

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
    nav{
        flex:1;
        a{
            color:#fff;
            margin-left:30px;
            &.xxx{
                color:red;
                border-bottom:1px solid red;
            }
        }
    }
    .login{
        border:1px solid red;
        button:first-child{
            margin-right:5px;
        }
       
    }
`


function Header() {
    const router = useHistory()
    return (
        <StyledHeader>
            <img src={logo} alt="xxx" />
            <nav>
                <NavLink to="/home" activeClassName="xxx" >首页</NavLink>
                <NavLink to="/about" activeClassName="xxx" >关于</NavLink>
                <NavLink to="/history" activeClassName="xxx" >历史</NavLink>
            </nav>
            <div className="login">
                <Button type="primary" onClick={() => router.push('/login')}>登陆</Button>
                <Button type="primary" onClick={() => router.push('/register')}>注册</Button>
            </div>
        </StyledHeader>
    )
}
export default Header