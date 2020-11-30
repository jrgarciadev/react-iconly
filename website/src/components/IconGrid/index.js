import { useState } from 'react'
import { connectHits } from 'react-instantsearch-dom'
import { AutoSizer, List, WindowScroller } from 'react-virtualized'
import { ICON_ROW_HEIGHT, ICON_MAX_COLUMN_WIDTH } from '@lib/constants'
import { GridContainer, StyledGrid } from './styles'
import { Icon } from '@components'

// IconGrid might need to display a lot of icons (>200).
// To avoid an excessive DOM size, we use react-virtualized
// to only render the icons that are visible on the screen.

const IconGrid = ({ hits = [] }) => {
  // Initialize numColumns to an arbitrary number.
  const [numColumns, setNumColumns] = useState(1)
  const renderRow = ({ key, index: rowIndex, style }) => {
    return (
      <StyledGrid key={key} numColumns={numColumns} style={style}>
        {Array.from({ length: numColumns }, (value, columnIndex) => {
          const icon = hits[rowIndex * numColumns + columnIndex]
          if (!icon) {
            return null
          }
          return <Icon key={icon.objectID} {...icon} />
        })}
      </StyledGrid>
    )
  }

  const onResize = ({ width }) => {
    if (width <= 576) {
      setNumColumns(Math.floor(width / (ICON_MAX_COLUMN_WIDTH - 20)))
    } else {
      setNumColumns(Math.floor(width / ICON_MAX_COLUMN_WIDTH))
    }
  }

  return (
    <GridContainer>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer disableHeight onResize={onResize}>
            {({ width }) => (
              <List
                tabIndex={-1}
                autoHeight
                width={width}
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                rowCount={Math.ceil(hits.length / numColumns)}
                rowHeight={ICON_ROW_HEIGHT}
                rowRenderer={renderRow}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </GridContainer>
  )
}

const CustomHits = connectHits(IconGrid)

export default CustomHits
