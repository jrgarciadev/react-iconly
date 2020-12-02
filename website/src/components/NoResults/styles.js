import styled from 'styled-components'

export const StyledContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  margin-top: -6%;
  .no-results-text {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.lg};
    span {
      font-weight: ${({ theme }) => theme.fontw.semibold};
    }
  }
  .icon-suggest {
    text-align: center;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.accent3};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: -15%;
  }
`
