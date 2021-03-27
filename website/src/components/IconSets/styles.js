import styled from 'styled-components'

export const StyledContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 100%;
  padding: 0 2rem;
  margin-top: 4rem;
  input {
    margin-right: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 5%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
  }
`
