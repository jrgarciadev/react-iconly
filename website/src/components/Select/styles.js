import styled, { css } from 'styled-components'
import { hexa } from '@utils'

export const SelectContainer = styled.div`
  width: 100%;
  border-left-width: 1.5px;
  border-left-style: solid;
  border-color: ${(props) => hexa(props.theme.colors.accent3, 0.5)};
  margin: 0 auto;
`

export const SelectHeader = styled.div`
  ${({ theme }) => theme.mixins.noSelect}
  ${({ theme }) => theme.mixins.flexBetween};
  margin: 0 2rem;
  width: 150px;
  font-weight: ${(props) => props.theme.fontw.regular};
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.colors.accent3};
  text-transform: capitalize;
  cursor: pointer;
  span {
    padding: 0 10px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSize.md};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 80px;
  }
`

export const SelectListContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  transition: ${(props) => props.theme.transitions.default};
  z-index: 100;
  width: 140px;
  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`

export const SelectList = styled.ul`
  margin: 0;
  padding: 0.5rem 1.5rem;
  border: 0;
  transition: ${(props) => props.theme.transitions.default};
  background: ${(props) => props.theme.bg.default};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.medium};
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.accent3};
  font-size: ${(props) => props.theme.fontSize.md};
  text-transform: capitalize;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`

export const StyledListItem = styled.li`
  ${({ theme }) => theme.mixins.noSelect};
  cursor: pointer;
  list-style: none;
  margin-bottom: 0.8em;
  transition: ${(props) => props.theme.transitions.default};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`
