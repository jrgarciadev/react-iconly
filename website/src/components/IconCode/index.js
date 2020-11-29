import PropTypes from 'prop-types'
import copy from 'copy-to-clipboard'
import { StyledCodeContainer } from './styles'
import { Paper } from 'react-iconly'
import { Tooltip } from '@components'
import * as gtag from '@lib/gtag'

const IconCode = ({ iconName, svgPath, set }) => {
  const handleCopy = () => {
    copy(`<${iconName} set="${set}" primaryColor="blueviolet"/>`)
    gtag.event({ action: 'copy', category: 'icon', label: iconName })
  }

  return (
    <StyledCodeContainer>
      <span className='symbol'>{`<`}</span>
      <span className='component'>{`${iconName}`}</span>
      <span className='attr'>set</span>
      <span className='symbol'>=</span>
      <span className='attrValue'>{`"${set}"`}</span>
      <span className='attr'>primaryColor</span>
      <span className='symbol'>=</span>
      <span className='attrValue'>"blueviolet"</span>
      <span className='symbol'>{`/>`}</span>
      <Tooltip position='top' content='Copy'>
        <Paper
          onClick={handleCopy}
          className='paper'
          set='bulk'
          primaryColor='white'
        />
      </Tooltip>
    </StyledCodeContainer>
  )
}

IconCode.propTypes = {
  set: PropTypes.string.isRequired,
  svgPath: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}

export default IconCode
