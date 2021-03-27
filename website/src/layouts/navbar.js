import { StyledNavbar } from './styles'
import styled from 'styled-components'
import { Sun, Moon } from '@components/Icons'
import useDarkMode from 'use-dark-mode'

export const ThemeSwitcher = styled.div`
  cursor: pointer;
  display: block;
  padding: 1.4rem;
`

const Navbar = () => {
  const darkMode = useDarkMode()
  return (
    <StyledNavbar>
      <a
        rel='noreferrer'
        href='https://github.com/jrgarciadev/react-iconly'
        target='_blank'
      >
        Github
      </a>
      <p>
        Built by &nbsp;
        <a rel='noreferrer' href='https://jrgarciadev.com' target='_blank'>
          Junior García
        </a>
      </p>
      <ThemeSwitcher onClick={darkMode.toggle}>
        {darkMode.value ? <Moon /> : <Sun />}
      </ThemeSwitcher>
    </StyledNavbar>
  )
}

export default Navbar
