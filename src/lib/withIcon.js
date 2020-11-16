import React, { memo } from 'react'
import PropTypes from 'prop-types'

function withIcon(Component) {
  class IconWrapper extends React.Component {
    render() {
      const { size, label, viewBox, primaryColor, ...restProps } = this.props
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={size || 24}
          height={size || 24}
          viewBox={viewBox || '0 0 24 24'}
          role={label ? 'img' : 'presentation'}
          aria-label={label || undefined}
          {...restProps}
        >
          <Component color={primaryColor || 'currentColor'} />
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
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),

    /**
     * Icon set option
     *- Bold
     *- Bulk
     *- Light - Border
     *- Light - Outline
     *- Broken
     *- Two Tone
     */
    set: PropTypes.oneOf([
      'bold',
      'bulk',
      'light-border',
      'light-outline',
      'broken',
      'two-tone'
    ]),

    /**
     * Line Stroke option
     */
    stroke: PropTypes.oneOf(['light', 'regular', 'bold']),

    /**
     * Viewbox container for the icon.
     */
    viewBox: PropTypes.string,

    /**
     * Custom styles property
     */
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

    /**
     * Svg children to render icon
     */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  const memoIcon = memo(IconWrapper)
  return memoIcon
}

export default withIcon
