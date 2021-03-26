import styled from 'styled-components'

export const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  h1 {
    font-size: ${(props) => props.theme.fontSize.title};
    text-align: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: ${({ theme }) => theme.fontw.semibold};
    background-size: 300%;
    background-image: linear-gradient(
      45deg,
      #ffb240,
      #ff646a,
      #d376f7,
      #374bf9
    );
    position: relative;
    z-index: 1;
    animation: flow 5s ease-in-out infinite;
    @keyframes flow {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
      font-size: 6rem;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      font-size: 4rem;
    }
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
