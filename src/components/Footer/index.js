import React from 'react';
import styled from 'styled-components';

function Footer() {
  const Footer = styled.footer`
    padding-inline: 10%;
    padding-top: 32px;
    
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.dark};
    font-family: ${props => props.theme.font.paragraph};

    hr {
      margin-top: 24px;
      margin-inline: auto;
      border: none;
      height: 1px;
      border-radius: 50px;
      background-color: ${props => props.theme.color.gray};
    }

    .container {
      display: grid;
      
      grid-template-areas: 'tagList' 'linkList';
      gap: 16px;

      @media only screen and (min-width: 768px) {
        grid-template-areas: 'tagList linkList';
        grid-template-columns: 1fr 1fr;

        .link-lists {
          justify-content: space-around;
        }
      }

      .tag-list {
        grid-area: tagList;

        p {
          margin-bottom: 8px;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;

          li {
            padding: 6px 8px;
            font-size: 13px;
            color: ${props => props.theme.color.gray};
            border: 1px solid ${props => props.theme.color.gray};
            border-radius: 2px;
          }
        }
      }

      .link-lists {
        grid-area: linkList;

        display: flex;
        justify-content: space-between;

        @media only screen and (min-width: 768px) {
          justify-content: space-around;
        }

        a {
          color: ${props => props.theme.color.highlight};
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .legal {
      font-size: 14px;
      padding-block: 24px;
    }
  `

  return (
    <Footer>
      <div className='container'>
        <div className="tag-list">
          <p>EUC Lillebælt</p>
          <ul>
            <li className="tag">HTX LILLEBÆLT</li>
            <li className="tag">GYMNASIE</li>
            <li className="tag">DANSK</li>
            <li className="tag">ELEVER</li>
            <li className="tag">PERSONALE</li>
            <li className="tag">IT</li>
            <li className="tag">SIKKERHED</li>
            <li className="tag">FAG</li>
            <li className="tag">AMONG US</li>
            <li className="tag">FREDERICIA</li>
            <li className="tag">ERRITSØ</li>
          </ul>
        </div>
        <div className="link-lists">
          <div className="list">
            <p className="title">Links</p>
            <ul>
              <li><a href="https://www.eucl.dk/htx/om-htx/">EUC Lillebælt</a></li>
              <li><a href="#">Elevrådet</a></li>
              <li><a href="https://all.studieplus.dk">Studie+</a></li>
            </ul>
          </div>

          <div className="list">
            <p className="title">Menu</p>
            <ul>
              <li><a href="https://www.eucl.dk/htx/om-htx/">Uddannelse</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">IT-sikkerhed</a></li>
            </ul>
          </div>

          <div className="list">
            <p className="title">Social</p>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Youtube</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className='legal'>
        Copyright © 2022 EUC Lillebælt
      </div>
    </Footer>
  )
}

export default Footer;
