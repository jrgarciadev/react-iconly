import { useContext } from 'react'
import download from 'downloadjs'
import OutsideClickHandler from 'react-outside-click-handler'
import { IconDataContext } from '@lib/context'
import { StyledContainer, IconWrapper } from './styles'
import { IconCode, Tooltip } from '@components'
import { Download } from 'react-iconly'
import * as gtag from '@lib/gtag'

const IconDetail = () => {
  const { icon, removeIcon } = useContext(IconDataContext)

  const handleDownload = () => {
    download(icon.svgPath, `${icon.name}.svg`, 'image/svg+xml')
    gtag.event({ action: 'download_icon', category: 'icon', label: icon.name })
  }

  return (
    <OutsideClickHandler onOutsideClick={removeIcon}>
      <StyledContainer isOpen={icon.visible}>
        <div className='icon-container'>
          <IconWrapper
            set={icon?.set}
            dangerouslySetInnerHTML={{ __html: icon?.svgPath }}
          />
          <p className='name'>{icon?.name}</p>
        </div>
        <IconCode
          iconName={icon?.componentName}
          svgPath={icon?.svgPath}
          set={icon?.set}
        />
        <Tooltip position='top' content='Download'>
          <div className='download' onClick={handleDownload}>
            <Download set='bulk' primaryColor='white' />
            <p>svg</p>
          </div>
        </Tooltip>
      </StyledContainer>
    </OutsideClickHandler>
  )
}

export default IconDetail
