import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Badge } from '@components'
import { TabsContext } from './tabs-context'
import { isEmpty } from 'lodash'
import { TabsContainer, TabsHeader, Tab, TabContent } from './styles'

const Tabs = ({
  initialValue: userCustomInitialValue,
  value,
  hideDivider = false,
  fullWidth = false,
  children,
  onChange,
  className = '',
  ...props
}) => {
  const [selfValue, setSelfValue] = useState(userCustomInitialValue)
  const [tabs, setTabs] = useState([])

  const register = (next) => {
    setTabs((last) => {
      const hasItem = last.find((item) => item.value === next.value)
      if (!hasItem) return [...last, next]
      return last.map((item) => {
        if (item.value !== next.value) return item
        return {
          ...item,
          badgeText: next.badgeText,
          label: next.label,
          disabled: next.disabled
        }
      })
    })
  }

  const initialValue = useMemo(
    () => ({
      register,
      currentValue: selfValue,
      inGroup: true
    }),
    [selfValue]
  )

  useEffect(() => {
    if (value === undefined) return
    setSelfValue(value)
  }, [value])

  const clickHandler = (item) => {
    if (item.disabled) return
    setSelfValue(item.value)
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(item.value)
  }

  return (
    <TabsContext.Provider value={initialValue}>
      <TabsContainer className={className} {...props}>
        <TabsHeader hideDivider={hideDivider} fullWidth={fullWidth}>
          {tabs.map((item, index) => (
            <Tab
              active={selfValue === item.value}
              hasBadge={!isEmpty(item.badgeText)}
              disabled={item.disabled}
              tabIndex={index}
              role='button'
              key={item.value}
              onClick={() => clickHandler(item)}
            >
              {item.label}
              {item.badgeText && <Badge label={item.badgeText} />}
            </Tab>
          ))}
        </TabsHeader>
        <TabContent>{children}</TabContent>
      </TabsContainer>
    </TabsContext.Provider>
  )
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  fullWidth: PropTypes.bool,
  initialValue: PropTypes.string,
  value: PropTypes.string,
  hideDivider: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
}

export default Tabs
