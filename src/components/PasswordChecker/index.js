import React, { useState } from 'react';
import styled from 'styled-components';
import SplitContainer from '../SplitContainer';

const InputFormStyle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  text-align: center;

  label {
    font-family: ${props => props.theme.font.header};
  }

  input {
    padding: 2px;
    font-size: 16px;
    font-family: ${props => props.theme.font.header};
  }
`

function PasswordChecker() {
  const [input, setInput] = useState('');
  const [strength, setStrength] = useState('');
  const [length, setLength] = useState(0);
  const [hasChar, setHasChar] = useState(false);
  const [hasLargeChar, setHasLargeChar] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  let charChecker = new RegExp('(?=.*[a-z])');
  let largeCharChecker = new RegExp('(?=.*[A-Z])');
  let symbolChecker = new RegExp('(?=.*[^A-Za-z0-9])');
  let numberChecker = new RegExp('(?=.*[0-9])');

  let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

  function updateFields(input) {
    setInput(input);
    strengthChecker(input);
  }

  function strengthChecker(password) {
    setLength(password.length);
    setHasChar(charChecker.test(password));
    setHasLargeChar(largeCharChecker.test(password));
    setHasSymbol(symbolChecker.test(password));
    setHasNumber(numberChecker.test(password));

    if (password === 'marcus') {
      setStrength('🤢 Dit kodeord er klamt.');
    } else if (strongPassword.test(password)) {
      setStrength('Dit kodeord er stærkt 😎');
    } else if (mediumPassword.test(password)) {
      setStrength('Dit kodeord er okay 😳');
    } else {
      setStrength('Dit kodeord er svagt 😞');
    }
  }
  
  return (
    <SplitContainer>
      <div> 
        <h2 className="title">Password tjekker</h2>
        <p>Tjek dit kodeords styrke med vores kodeord tjekker. Den kigger efter længde og hvilke type tegn du anvender.</p>
        <h3 className="title">Hvad er et godt password?</h3>
        <p>For at et kodeord er godt skal det overholde følgenden krav:</p>
        <ul>
          <li>Skal indeholde store og små bogstaver.</li>
          <li>Skal indeholde numre.</li>
          <li>Skal indeholde specielle symboler.</li>
          <li>Skal havde en længde på 6+ karaktere.</li>
        </ul>
      </div>
      <div>
        <h3 className="title">Kodeord status</h3>
        <p>Indtast et ord og se dens styrke.</p>
        <InputFormStyle>
          <p>Kodeord</p>
          <input type="text" placeholder="Dit kodeord" value={input} onChange={(e) => updateFields(e.target.value)} />
        </InputFormStyle>
        {length > 0 && (
          <>
            <p>{strength}</p>
            {length >= 6 ? <p>✅ Din kodes længde er {length}, som er godt.</p> : <p>❌ Din kodes længde er {length}, som er for kort.</p>}
            {hasSymbol ? <p>✅ Din kode indeholder symboler.</p> : <p>❌ Din kode mangler symboler.</p>}
            {hasChar ? <p>✅ Din kode indeholder bogstaver.</p> : <p>❌ Din kode mangler bogstaver.</p>}
            {hasLargeChar ? <p>✅ Din kode indeholder store bogstaver.</p> : <p>❌ Din kode mangler store bogstaver.</p>}
            {hasNumber ? <p>✅ Din kode indeholder numre.</p> : <p>❌ Din kode mangler numre.</p>}
          </>
        )}
      </div>
    </SplitContainer>
  );
}

export default PasswordChecker;