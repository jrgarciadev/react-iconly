import PropTypes from 'prop-types'
import { isFunction } from 'lodash'
import { StyledBadge } from './styles'

const Badge = ({ label, onClick, ...props }) => {
  return (
    <StyledBadge onClick={isFunction(onClick) ? onClick : undefined} {...props}>
      {label || 'Badge'}
    </StyledBadge>
  )
}

Badge.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}
export default Badge
