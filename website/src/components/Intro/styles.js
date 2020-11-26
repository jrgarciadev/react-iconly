import styled from 'styled-components'

export const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  h1 {
    font-size: ${(props) => props.theme.fontSize.title};
    font-weight: ${(props) => props.theme.fontw.semibold};
  }
  p {
    max-width: 70%;
    text-align: center;
    margin: 1rem 0;
    color: ${(props) => props.theme.colors.accent3};
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontw.light};
    a {
      font-size: ${(props) => props.theme.fontSize.lg};
      color: ${(props) => props.theme.colors.primary};
    }
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      max-width: 90%;
    }
  }
  .btn-container {
    display: flex;
    margin: 0.5rem 0;
  }
`

export const StyledButton = styled.a`
  ${({ theme, accent }) =>
    accent ? theme.mixins.bigButtonAccent : theme.mixins.bigButtonPrimary};
  margin: 0 0.5rem;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontw.regular};
`
