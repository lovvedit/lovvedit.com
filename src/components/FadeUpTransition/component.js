import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

const StyledNodeWrapper = styled.div``;

const FadeUpTransition = props => (
  <Transition {...props} timeout={500}>
    {state => <StyledNodeWrapper state={state}>{props.children}</StyledNodeWrapper>}
  </Transition>
);

FadeUpTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeUpTransition;
