import { React, Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Page from './Page';

function IndexPage() {
    const IndexPage = styled.header`
        height: 50vh;
        font-family: ${props => props.theme.font.header};
        display:flex;
        text-align: center;
        align-items: center;
        gap: 16px;
        
        p {
            color: ${props => props.theme.color.gray}
        }

        .nav-link {
            display: flex;
            padding: 6px 12px;
            align-items: center;
            cursor: pointer;
            gap: 6px;
            background-size: 100% 200%;
            background-image: linear-gradient(to bottom, ${props => props.theme.color.dark} 50%, ${props => props.theme.color.gray} 50%);
            transition: background-position 0.3s;
            max-width: 200px;

            &:hover {
            background-image: linear-gradient(to bottom, ${props => props.theme.color.dark} 50%, ${props => props.theme.color.highlight} 50%);
            background-position: 0 100%;
            }

            .link {
                color: ${props => props.theme.color.white};
                text-decoration: none;
            }
        }
    `;

    const Wrapper = styled.div`
        padding-inline: 10%;

        @media only screen and (max-width: 500px) {
            padding-inline: 5%;
        }
    `

    return (
        <Page>
            <IndexPage>
                <Wrapper>
                    <p>Gå til</p>
                    <div className="nav-link">
                        <Link className="link" to="it-sikkerhed">
                            IT-SIKKERHED
                        </Link>
                    </div>
                </Wrapper>
            </IndexPage>
        </Page>
    )
}

export default IndexPage;