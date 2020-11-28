import styled from 'styled-components'
import { ICON_ROW_HEIGHT } from '@lib/constants'

export const GridContainer = styled.div`
  margin: 2rem 0;
  padding: 10px;
  max-width: 780px;
  width: 100%;
  min-height: ${ICON_ROW_HEIGHT}px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    min-height: ${ICON_ROW_HEIGHT - 40}px;
  }
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numColumns}, 1fr);
  justify-items: center;
  align-items: center;
`
