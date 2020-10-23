import styled from 'styled-components';
import { Wrapper } from './Layout';
import { Button } from './Button';
import { color, device } from '../utils/variables';

export const HeroBanner = styled.header`
  display: flex;
  background: ${color.blue};
  justify-content: center;
  padding: 20px;
  color: white;
  @media ${device.laptop} {
    padding: 40px;
  }
`;

export const HeroWrapper = styled(Wrapper)`
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  align-items: center;
  @media ${device.laptop} {
    align-items: flex-end;
  }
  @media ${device.laptop} {
    padding: 40px;
  }

  h1 {
    font-size: 70px;
    line-height: 1;
    font-family: 'TelefonicaExtraLight';
    text-align: center;
  }

  p {
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    @media ${device.laptop} {
      text-align: right;
    }
  }
`;

export const HeroImage = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
  @media ${device.laptopL} {
    flex: 2;
  }
  @media ${device.laptop} {
    padding: 40px;
  }

  img {
    max-width: 300px;
    @media ${device.laptopL} {
      max-width: 600px;
    }
  }
`;
