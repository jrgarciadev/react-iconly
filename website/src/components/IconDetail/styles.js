import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  opacity: 0;
  visibility: hidden;
  padding: 1.5rem;
  position: fixed;
  bottom: -90px;
  left: 0;
  right: 0;
  margin: 0 20%;
  min-height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.bg.reverse};
  transition: ${({ theme }) => theme.transitions.default};
  h1 {
    color: ${({ theme }) => theme.text.reverse};
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      bottom: 1rem;
    `}
`
