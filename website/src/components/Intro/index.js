import { StyledIntro, StyledButton } from './styles'

const Intro = () => (
  <StyledIntro>
    <h1>React Iconly</h1>
    <p>
      Collection of simply beautiful open source icons for&nbsp;
      <a rel='noreferrer' href='https://reactjs.org' target='_blank'>
        React.js
      </a>
      &nbsp; Designed by&nbsp;
      <a rel='noreferrer' href='https://ui8.net/piqodesign' target='_blank'>
        Piqo Design
      </a>
    </p>
    <div className='btn-container'>
      <StyledButton
        rel='noreferrer'
        href='https://github.com/jrgarciadev/react-iconly'
        target='_blank'
      >
        Get Started
      </StyledButton>
      <StyledButton accent>Download Pack</StyledButton>
    </div>
  </StyledIntro>
)

export default Intro
