import styled from 'styled-components'
import { ICON_ROW_HEIGHT } from '@lib/constants'

export const GridContainer = styled.div`
  margin: -2px;
  min-height: ${ICON_ROW_HEIGHT};
`

export const StyledGrid = styled.div`
  display: grid,
  gridTemplateColumns: repeat(${(props) => props.numColumns}, 1fr),
  justifyItems: stretch,
  alignItems: stretch
`
