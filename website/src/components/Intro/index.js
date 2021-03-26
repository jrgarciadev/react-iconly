import { StyledIntro, StyledButton } from './styles'
import * as gtag from '@lib/gtag'
import { download } from '@utils'

const Intro = () => {
  const handleDownload = () => {
    download('/icons.zip', 'Iconly.zip')
    gtag.event({ action: 'download_pack', category: 'all' })
  }

  return (
    <StyledIntro>
      <h1>React Iconly 2.2</h1>
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
        <StyledButton onClick={handleDownload} accent>
          Download Pack
        </StyledButton>
      </div>
    </StyledIntro>
  )
}
export default Intro
