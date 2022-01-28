import React, { useState } from 'react';
import styled from 'styled-components';

const PasswordCheckerStyle = styled.div`

`

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

  let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

  function updateFields(input) {
    setInput(input);
    strengthChecker(input);
  }

  function strengthChecker(passwordParameter) {
    if (strongPassword.test(passwordParameter)) {
      setStrength('stærk');
    } else if (mediumPassword.test(passwordParameter)) {
      setStrength('okay');
    } else {
      setStrength('svagt');
    }
  }
  
  return (
      <PasswordCheckerStyle>
        <InputFormStyle>
          <p>Kodeord</p>
          <input type="text" placeholder="Mit kodeord" value={input} onChange={(e) => updateFields(e.target.value)} />
        </InputFormStyle>

        <p>Dit kodeord er {strength}.</p>
      </PasswordCheckerStyle>
  );
}

export default PasswordChecker;