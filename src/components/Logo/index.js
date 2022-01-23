import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../logo.svg';

function Logo() {
    const Logo = styled.div`
        height: 8vh;

        .link {
            text-decoration: none;
            display: flex;
            gap: 16px;
            align-items: center;
            height: 8vh;
        }

        img {
            height: 80%;
        }
        
        .text {
            .title {
                color: ${props => props.theme.color.white};
                font-size: 18px;
                font-family: ${props => props.theme.font.header};
                font-weight: 700;
            }

            .under-title {
                color: ${props => props.theme.color.gray};
                font-family: ${props => props.theme.font.paragraph};
                font-weight: 700;
            }
        }
    `
    return (
        <Logo>
            <Link className="link" to="/">
            <img src={logo} alt="logo" />
            <div className="text">
                <p className="title">EUC LILLEBÆLT</p>
                <p className="under-title">Elev og personale</p>
            </div>
            </Link>
        </Logo>
    );
}

export default Logo;
