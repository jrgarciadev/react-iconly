import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { getSize, getStroke, getOpacity } from './utils'

function withIcon(Component) {
  class IconWrapper extends React.Component {
    render() {
      const {
        size,
        label,
        primaryColor,
        secondaryColor,
        filled,
        set,
        style,
        stroke,
        ...restProps
      } = this.props
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={getSize(size)}
          height={getSize(size)}
          viewBox='0 0 24 24'
          role={label ? 'img' : 'presentation'}
          aria-label={label || undefined}
          style={{ ...style }}
          {...restProps}
        >
          <Component
            color={primaryColor || 'currentColor'}
            opacity={getOpacity(primaryColor, secondaryColor)}
            secondaryColor={secondaryColor || primaryColor || 'currentColor'}
            set={filled ? 'bold' : set || 'light'}
            strokeWidth={getStroke(stroke)}
          />
        </svg>
      )
    }
  }
  IconWrapper.propTypes = {
    /**
     * String to use as the aria-label for the icon.
     * **Use an empty string when you already have readable text around the icon,
     * like text inside a button**!
     */
    label: PropTypes.string,

    /**
     * Set de icons sets to 'bold'
     */
    filled: PropTypes.bool,

    /**
     * For primary colour for icons.
     */
    primaryColor: PropTypes.string,

    /**
     * For secondary colour for 2-color icons.
     */
    secondaryColor: PropTypes.string,

    /**
     * Control the size of the icon.
     */
    size: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
    ]),

    /**
     * Icon set option
     *- Bold
     *- Bulk
     *- Light - Border (default)
     *- Light - Outline
     *- Broken
     *- Two Tone
     */
    set: PropTypes.oneOf(['bold', 'bulk', 'light', 'broken', 'two-tone']),

    /**
     * Line Stroke option
     */
    stroke: PropTypes.oneOf(['light', 'regular', 'bold']),

    /**
     * Custom styles property
     */
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  }

  const memoIcon = memo(IconWrapper)
  return memoIcon
}

export default withIcon
