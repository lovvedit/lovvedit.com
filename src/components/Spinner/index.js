import React from 'react';
import styled from 'styled-components';
import SpinKit from 'react-spinkit';

const StyledWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Spinner() {
  return (
    <StyledWrapper>
      <SpinKit name="folding-cube" fadeIn="half" />
    </StyledWrapper>
  );
}
