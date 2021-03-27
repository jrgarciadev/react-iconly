import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

export const TabsContainer = styled.div`
  width: initial;
`

export const Tab = styled.div`
  padding: ${({ theme }) =>
    `${theme.layout.gapHalf} calc(0.65 * ${theme.layout.gapHalf})`};
  cursor: pointer;
  outline: 0;
  transition: all 200ms ease;
  text-transform: capitalize;
  margin: 0 calc(0.8 * ${(props) => props.theme.layout.gapQuarter});
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.accent4};
  user-select: none;
  display: flex;
  align-items: center;
  line-height: 1.25rem;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0.75);
    background-color: transparent;
    transition: all 200ms ease;
  }
  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.colors.primary};
      &:after {
        background-color: ${theme.colors.primary};
        transform: scaleX(1);
      }
    `}
  ${ifProp(
    { hasBadge: true },
    css`
      span {
        margin-left: 1rem;
      }
    `
  )}

  &:disabled,
  &:disabled:hover,
  &:disabled:focus {
    color: ${({ theme }) => theme.colors.accent4};
    cursor: not-allowed;
  }

  svg {
    max-height: 1em;
    margin-right: 5px;
  }

  &:first-of-type {
    margin-left: 0;
  }
`

export const TabsHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent4};
  ${({ hideDivider }) =>
    hideDivider &&
    css`
      border-bottom: none;
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      flex-wrap: nowrap;
      justify-content: space-between;
      ${Tab} {
        justify-content: center;
        text-align: center;
        width: 100%;
      }
    `}
`

export const TabContent = styled.div`
  padding-top: 0.625rem;
`
