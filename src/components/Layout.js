import styled from 'styled-components';
import { color, device } from '../utils/variables';

const defaultPadding = 20;

const setPadding = (padding) =>
  padding.toString().length && padding !== true ? padding : defaultPadding;

export const Common = styled.div`
  ${(props) =>
    props.fixed &&
    `
    position: fixed;
`};
  display: inline-flex;
  ${(props) => props.bkg && `background-color: ${color(props.bkg)}`};
  ${(props) =>
    props.border &&
    `border: ${props.borderSize || 1}px solid ${color(props.border)}`};
  ${(props) => props.radius && `border-radius: ${props.radius}px;`};
  ${(props) => props.paddingAll && `padding:${setPadding(props.paddingAll)}px`}
  ${(props) =>
    props.paddingTop && `padding-top:${setPadding(props.paddingTop)}px`};
  ${(props) =>
    props.paddingLeft && `padding-left:${setPadding(props.paddingLeft)}px`};
  ${(props) =>
    props.paddingRight && `padding-right:${setPadding(props.paddingRight)}px`};
  ${(props) =>
    props.paddingBottom &&
    `padding-bottom:${setPadding(props.paddingBottom)}px`};
  ${(props) =>
    props.paddingX &&
    `padding-left:${setPadding(props.paddingX)}px; 
    padding-right:${setPadding(props.paddingX)}px;`};
  ${(props) =>
    props.paddingY &&
    `padding-top:${setPadding(props.paddingY)}px; 
    padding-bottom:${setPadding(props.paddingY)}px;`};
  ${(props) => props.marginAll && `margin:${setPadding(props.marginAll)}px`};
  ${(props) =>
    props.marginTop && `margin-top:${setPadding(props.marginTop)}px`};
  ${(props) =>
    props.marginLeft && `margin-left:${setPadding(props.marginLeft)}px`};
  ${(props) =>
    props.marginRight && `margin-right:${setPadding(props.marginRight)}px`};
  ${(props) =>
    props.marginBottom && `margin-bottom:${setPadding(props.marginBottom)}px`};
  ${(props) =>
    props.marginX &&
    `margin-left:${setPadding(props.marginX)}px; margin-right:${setPadding(
      props.marginX,
    )}px;`};
  ${(props) =>
    props.marginY &&
    `margin-top:${setPadding(props.marginY)}px; margin-bottom:${setPadding(
      props.marginY,
    )}px;`};
  ${(props) => props.flex && `flex: ${props.flex};`};
  ${(props) => props.multiline && `flex-wrap: wrap`};

  ${(props) =>
    props.hide &&
    `
    @media ${device[props.hide]} {
      display: none;
    }
  `};

  ${(props) =>
    props.show &&
    `
    display: none;
    @media ${device[props.show]} {
      display: flex;
    }
  `};

  ${(props) =>
    props.bkgImage &&
    `
    background-size: cover;
    background-image: url(${props.bkgImage});
  `};

  &.hover {
    cursor: pointer;
  }
`;

export const Row = styled(Common)`
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  ${(props) => props.expand && `width: 100%`};
  ${(props) => props.fit && `flex: 1`};
  ${(props) => props.noFlex && `flex: 0`};
  ${(props) => props.noShrink && `flex-shrink: 0`};
  ${(props) => props.top && 'align-items: flex-start'};
  ${(props) => props.middle && 'align-items: center'};
  ${(props) => props.bottom && 'align-items: flex-end'};
  ${(props) => props.left && 'justify-content: flex-start'};
  ${(props) => props.center && 'justify-content: center'};
  ${(props) => props.right && 'justify-content: flex-end'};
  ${(props) => props.spaceBetween && 'justify-content: space-between'};
  ${(props) =>
    props.truncate &&
    `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `};
`;

export const Column = styled(Common)`
  flex-direction: column;
  ${(props) => props.fit && 'flex: 1;'};
  ${(props) => props.expand && 'min-height: 100vh'};
  ${(props) => props.top && 'justify-content: flex-start'};
  ${(props) => props.middle && 'justify-content: center'};
  ${(props) => props.bottom && 'justify-content: flex-end'};
  ${(props) => props.left && 'align-items: flex-start'};
  ${(props) => props.center && 'align-items: center'};
  ${(props) => props.right && 'align-items: flex-end'};
  ${(props) => props.stretch && 'width: 100%'};
`;
