import styled from 'styled-components';
import { color } from '../utils/variables';

export const HeroBanner = styled.header`
  display: flex;
  background: ${color.blue};
  min-height: 300px;
  padding: 40px;
  color: white;
`;

export const HeroText = styled.header`
  display: flex;
  flex: 1;
  padding: 40px;
  justify-content: right;

  h1 {
    font-size: 70px;
    line-height: 1;
    font-family: 'TelefonicaExtraLight';
    text-align: right;
  }

  p {
    font-size: 20px;
    text-align: right;
    line-height: 1.3;
  }
`;

export const HeroImage = styled.header`
  display: flex;
  flex: 2;
  padding: 40px;
`;
