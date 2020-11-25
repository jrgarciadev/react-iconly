import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 20px 150px;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 30px 100px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 25px 50px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 25px 25px;
  }

  &.fillHeight {
    padding: 0 200px;

    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
      padding: 0 100px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      padding: 0 50px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      padding: 0 25px;
    }
  }
`

export const StyledNavbar = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a,
  p {
    font-weight: ${(props) => props.theme.fontw.light};
    color: ${(props) => props.theme.colors.accent3};
  }
  a {
    color: ${(props) => props.theme.colors.primary};
  }
`
