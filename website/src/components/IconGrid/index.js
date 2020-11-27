import { useState } from 'react'
import { AutoSizer, List, WindowScroller } from 'react-virtualized'
import { Icon } from '@components'
import { ICON_ROW_HEIGHT, ICON_MAX_COLUMN_WIDTH } from '@lib/constants'
import { GridContainer, StyledGrid } from './styles'
import PropTypes from 'prop-types'

// IconGrid might need to display a lot of icons (>200).
// To avoid an excessive DOM size, we use react-virtualized
// to only render the icons that are visible on the screen.

const IconGrid = ({ icons = [] }) => {
  // Initialize numColumns to an arbitrary number.
  const [numColumns, setNumColumns] = useState(1)

  return (
    <GridContainer>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer
            disableHeight
            onResize={({ width }) =>
              // Recompute the number of columns when the grid resizes.
              // This function is also called on initial render.
              setNumColumns(Math.floor(width / ICON_MAX_COLUMN_WIDTH))
            }
          >
            {({ width }) => (
              <List
                tabIndex={-1}
                autoHeight
                width={width}
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                rowCount={Math.ceil(icons.length / numColumns)}
                rowHeight={ICON_ROW_HEIGHT}
                rowRenderer={({ key, index: rowIndex, style }) => (
                  <StyledGrid key={key}>
                    {
                      // Render each column.
                      Array.from(
                        { length: numColumns },
                        (value, columnIndex) => {
                          // Calculate the icon index using row and column indices.
                          const icon =
                            icons[rowIndex * numColumns + columnIndex]
                          // The icon index we computed might be out of range.
                          // If that's the case, render nothing.
                          if (!icon) {
                            return null
                          }
                          return (
                            <Icon
                              key={icon.name}
                              name={icon.name}
                              title={`Download ${icon.name}.svg`}
                            />
                          )
                        }
                      )
                    }
                  </StyledGrid>
                )}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </GridContainer>
  )
}

IconGrid.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      toSvg: PropTypes.func
    })
  ).isRequired
}

export default IconGrid
