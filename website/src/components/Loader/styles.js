import styled, { keyframes, css } from 'styled-components'
import { hexa } from '@utils'

export const circleKeyframes = keyframes`
   0%
    {
        -webkit-transform: rotate(0);
            -ms-transform: rotate(0);
             -o-transform: rotate(0);
                transform: rotate(0);
    }
    100%
    {
        -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
             -o-transform: rotate(360deg);
                transform: rotate(360deg);
    }
  `

export const circleLoader = ({ time = '.75s', type = 'infinite' } = {}) =>
  css`
    -webkit-animation: ${time} ${circleKeyframes} ${type};
    -moz-animation: ${time} ${circleKeyframes} ${type};
    -o-animation: ${time} ${circleKeyframes} ${type};
    animation: ${time} ${circleKeyframes} ${type};
  `

export const StyledLoader = styled.div`
  position: ${(props) => props.position || 'relative'};
  width: ${(props) => props.size || '4rem'};
  height: ${(props) => props.size || '4rem'};
  margin-left: ${(props) => props.ml || '0px'};
  margin-right: ${(props) => props.mr || '0px'};
  ${circleLoader({ time: '0.75s' })};
  border: 2px solid
    ${(props) =>
      props.theme.colors !== undefined
        ? props.theme.colors.primary
        : '#3378F7'};
  border-top-color: ${(props) =>
    hexa(
      props.theme.bg !== undefined ? props.theme.bg.reverse : '#181818',
      0.2
    )};
  border-right-color: ${(props) =>
    hexa(
      props.theme.bg !== undefined ? props.theme.bg.reverse : '#181818',
      0.2
    )};
  border-bottom-color: ${(props) =>
    hexa(
      props.theme.bg !== undefined ? props.theme.bg.reverse : '#181818',
      0.2
    )};
  border-radius: 100%;

  ${({ left }) => left && `left: ${left}`};
  ${({ right }) => right && `right: ${right}`};
  ${({ top }) => top && `top: ${top}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
`
