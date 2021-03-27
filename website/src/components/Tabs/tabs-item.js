import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTabsContext } from './tabs-context'

const TabsItem = ({
  children,
  value,
  label,
  badgeText = '',
  disabled = false
}) => {
  const { register, currentValue } = useTabsContext()
  const isActive = useMemo(() => currentValue === value, [currentValue, value])

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    register && register({ value, label, disabled, badgeText })
  }, [value, label, disabled])

  /* eslint-disable react/jsx-no-useless-fragment */
  return isActive ? <>{children}</> : null
}

TabsItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  badgeText: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.string,
  disabled: PropTypes.bool
}

export default TabsItem
/* eslint-enable */
