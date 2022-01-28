import { React, Component } from 'react';
import styled from 'styled-components';
import Page from './Page';
import image1 from '../images/secure.svg';
import image2 from '../images/hacker.svg';
import image3 from '../images/lock.svg';
import kortImage from '../images/kort.png';
import PasswordChecker from '../components/PasswordChecker';

function StudentPage() {
  const StudentPage = styled.header`
    .title {
      color: ${props => props.theme.color.highlight};
      font-family: ${props => props.theme.font.header};
    }

    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.25em;
    }

    p {
      color: ${props => props.theme.color.dark};
      font-family: ${props => props.theme.font.paragraph};
      font-size: 18px;
      margin-bottom: 12px;
    }

    li {
      list-style-type: disc;
      font-family: ${props => props.theme.font.paragraph};
      font-size: 16px;
      list-style-position: inside;
    }

    a {
      color: ${props => props.theme.color.highlight};
    }

    hr {
      margin-block: 80px;
      margin-inline: auto;
      border: none;
      height: 2px;
      width: 90%;
      background-color: #DDDDDD;

      @media only screen and (max-width: 1000px) {
        margin-block: 40px;
      }
    }
  `;

  const SplitContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media only screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
    }

    .image {
      width: 80%;
      margin-inline: auto;

      @media only screen and (max-width: 1000px) {
        width: 100%;
      }
    }

    .image.hide {
      @media only screen and (max-width: 1000px) {
        display: none;
      }
    }
  `

  const Wrapper = styled.div`
    padding-inline: 10%;

    @media only screen and (max-width: 500px) {
      padding-inline: 5%;
    }

    &.white {
      margin-top: 48px;
      padding-top: 32px;
      padding-bottom: 48px;
      background-color: white;
    }
  `

  return (
    <Page>
      <StudentPage>
        <Wrapper>
          <SplitContainer>
            <div>
              <h1 className="title">IT-SIKKERHED</h1>
              <p>IT-sikkerhed er vigtigt at kende til som elev, for at kunne forebygge risikoen for cyber angreb mod dine medstuderende, skolen og dig selv. Cyber angreb bliver udført af hackere som vil havde din sensitive informationer, for at anvende dem til dårlige formål rettet mod dig.</p>
              <p>Der findes mange forskellige trusler ude på nettet, og det er derfor godt at havde kendskab til dem, for at kunne opsætte et forsvar som vil kunne modstå dem.</p>
            </div>
            <img className="image hide" src={image1} alt="hacker" />
          </SplitContainer>
        </Wrapper>
        <hr />
        <Wrapper>
          <SplitContainer>
            <img className="image hide" src={image2} alt="" />
            <div>
              <h2 className="title">Trusler</h2>
              <p>Der findes mange forskellige trusler mod din data.</p>
              <h3 className="title">Identitets tyveri</h3>
              <p>Identitets tyveri er hvor uvedkommende udgiver sig for at være dig online. Din online identitet kan anvendes til at tilgå sentitiv information, og kan derfor være skadelige for dig og dine venner.</p>
              <h3 className="title">Computervirusser</h3>
              <p>Computervirusser er programmer som du kan komme til at hente ned. De køre på computeren uden at du opdager dem og kan sende sentitiv information til uvedkommende.</p>
            </div>
          </SplitContainer>
        </Wrapper>
        <hr />
        <Wrapper>
          <SplitContainer>
            <div>
              <h2 className="title">Hvad kan du gøre?</h2>
              <p>Som elev kan du gøre ting som stiller dig i en bedre position mod sikkerhedstrusler.</p>
              <ul>
                <li>Hold din computer og programmer opdateret.</li>
                <li>Tænk over hvilke sider du tilgår.</li>
                <li>Opdater dine koder regulert.</li>
                <li>Hold dine koder hemmelige.</li>
                <li>Anvend <a href="https://en.wikipedia.org/wiki/Multi-factor_authentication" target="_blank">Two-Factor Authentication</a>, hvis muligt.</li>
                <li>Ikke del sensitive informationer med uvedkommende.</li>
                <li>Kun installer apps du har tiltro til.</li>
                <li>Opdater og anvend et anti-virus program.</li>
              </ul>
            </div>
            <img className="image hide" src={image3} alt="" />
          </SplitContainer>
        </Wrapper>
        <hr />
        <Wrapper>
          <SplitContainer>
            <div>
              <h2 className="title">Password tjekker</h2>
              <p>Tjek dit kodeords styrke med vores kodeord tjekker. Den kigger efter længde og hvilke type tegn du anvender.</p>
              <PasswordChecker />
            </div>
            <div className="password-checker">
              
            </div>
          </SplitContainer>
        </Wrapper>
        
        <Wrapper className="white">
          <SplitContainer>
            <div>
              <h1 className="title">Spørgsmål?</h1>
              <p>Kontakt IT-afdelingen hvis du har flere spørgsmål om din eller skolens it-sikkerhed.</p>
              <p>Vi er til rådighed fra klokken 10:00 til 13:00 i hverdagene.</p>
              <p>Du kan finde os i IT-support lokalet ved siden af elevadministrationen.</p>
            </div>
            <img className="image" src={kortImage} alt="hacker" />
          </SplitContainer>
        </Wrapper>

      </StudentPage>
    </Page>
  )
}

export default StudentPage;