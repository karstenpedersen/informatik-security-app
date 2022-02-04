import React, { useState } from 'react';
import styled from 'styled-components';

const SplitContainerStyle = styled.div`
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

function SplitContainer({ children }) {
  return (
    <SplitContainerStyle>
      { children }
    </SplitContainerStyle>
  )
}

export default SplitContainer;