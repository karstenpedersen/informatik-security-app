import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo';
import { HeaderData } from './Header.data';

function Header() {
  const Header = styled.header`
    padding-inline: 10%;
    height: 10vh;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.dark};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${props => props.theme.font.header};
    overflow: hidden;
    box-shadow: 0px 0px 8px rgba(0,0,0,.6);
    margin-bottom: 32px;
  `

  const Navbar = styled.nav`
    @media only screen and (max-width: 1000px) {
      display: none;
    }

    ul {
      display: flex;
      gap: 16px;
      align-items: center;
      
      li {
        display: flex;
        padding: 6px 12px;
        align-items: center;
        cursor: pointer;
        gap: 6px;
        background-size: 100% 200%;
        background-image: linear-gradient(to bottom, ${props => props.theme.color.dark} 50%, ${props => props.theme.color.gray} 50%);
        transition: background-position 0.3s;
        
        &:hover {
          background-image: linear-gradient(to bottom, ${props => props.theme.color.dark} 50%, ${props => props.theme.color.highlight} 50%);
          background-position: 0 100%;
        }

        .nav-link {
          color: ${props => props.theme.color.white};
          text-decoration: none;
        }
      }
    }
  `

  return (
    <Header>
      <Logo />
      <Navbar>
        <ul>
          {HeaderData.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.className} to={item.path}>{item.title}</Link>
                {item.icon}
              </li>
            )
          })}
        </ul>
      </Navbar>
    </Header>
  )
}

export default Header;
