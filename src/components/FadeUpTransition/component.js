import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { compose, prop, ifElse, always, contains, flip } from 'ramda';
import styled, { keyframes } from 'styled-components';

const fadeUpIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const animation = `
  animation: ${fadeUpIn} 0.9s;
`;

const isInEnterStates = flip(contains)(['entering', 'entered']);
const hasEntered = compose(isInEnterStates, prop('status'));
const getCSSAnimation = ifElse(hasEntered, always(animation), always(''));
const StyledNodeWrapper = styled.div`${getCSSAnimation};`;

const FadeUpTransition = props => (
  <Transition {...props}>
    {status => <StyledNodeWrapper status={status}>{props.children}</StyledNodeWrapper>}
  </Transition>
);

FadeUpTransition.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number,
};

FadeUpTransition.defaultProps = {
  timeout: 6000,
};

export default FadeUpTransition;
