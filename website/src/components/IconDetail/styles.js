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
  background: ${({ theme }) => theme.colors.accent5};
  transition: ${({ theme }) => theme.transitions.default};
  overflow: auto;
  p {
    color: ${({ theme }) => theme.text.reverse};
  }
  .icon-container {
    ${({ theme }) => theme.mixins.flexBetween};
    p {
      margin-left: 0.8rem;
    }
  }
  .download {
    cursor: pointer;
    ${({ theme }) => theme.mixins.flexCenter}
    p {
      padding: 0 0.5rem;
    }
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      bottom: 1rem;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin: 0 14%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 4%;
    .name {
      display: none;
    }
    .icon-container {
      svg {
        margin-right: 0.5rem;
      }
    }
    .download {
      margin: 0 0.5rem;
    }
  }
`

export const IconWrapper = styled.div`
  svg {
    width: 30px;
    height: 30px;
    path {
      fill: ${({ set }) =>
        set === 'bold' || set === 'bulk' || set === 'broken'
          ? 'white'
          : 'none'};

      stroke: ${({ set }) =>
        set === 'light' || set === 'two-tone' ? 'white' : 'none'};
    }
  }
`
