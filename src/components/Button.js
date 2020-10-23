import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '@docusaurus/Link';
import { color } from '../utils/variables';

const ButtonInner = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  ${(props) => props.expand && 'width: 100%'};
  border: ${(props) =>
    props.transparent ? '1px solid white' : `1px solid ${color.blue}`};
  background-color: ${(props) =>
    props.transparent ? 'transparent' : color.blue};
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 1.6px;
  padding: 25px 50px;
  transition: 0.4s;
  text-transform: uppercase;
  color: white;

  &:focus {
    outline: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
  &:hover {
    ${ButtonInner} {
      background-color: white;
      color: ${color.blue};
    }

    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
  }
`;

export const Button = ({ to, label, onClick, transparent, expand }) => (
  <ButtonWrapper>
    {to ? (
      <Link to={to}>
        <ButtonInner {...{ onClick, transparent, expand }}>{label}</ButtonInner>
      </Link>
    ) : (
      <ButtonInner {...{ onClick, transparent, expand }}>{label}</ButtonInner>
    )}
  </ButtonWrapper>
);

Button.propTypes = {
  transparent: PropTypes.bool,
  expand: PropTypes.bool,
  to: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
