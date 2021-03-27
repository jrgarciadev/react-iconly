import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

export const StyledIcon = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  background: ${(props) => props.theme.bg.default};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.default};
  transition: ${(props) => props.theme.transitions.short};
  cursor: pointer;
  width: 80px;
  height: 80px;
  svg {
    width: 36px;
    height: 36px;
  }
  &:active {
    transform: scale(0.8);
  }
  ${ifProp(
    'isDarkMode',
    css`
      box-shadow: none;
      background: ${prop('theme.accents.a8')};
      border: 1px solid ${prop('theme.accents.a7')};
      &:hover,
      &:focus {
        border-color: ${prop('theme.colors.primary')};
      }
    `
  )}
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 60px;
    height: 60px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`
