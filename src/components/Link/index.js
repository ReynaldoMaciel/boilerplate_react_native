import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { withNavigation, NavigationEvents } from 'react-navigation'

const Link = ({
  to,
  children,
  navigation,
  style,
  params,
  disabled,
  backLink,
  beforeNavigate,
  testID,
}) => {
  const [navigating, setNavigating] = useState(false)
  return (
    <>
      <NavigationEvents onWillFocus={() => setNavigating(false)} />
      <TouchableOpacity
        testID={testID}
        onPress={() => {
          if (navigating) return
          setNavigating(true)
          if (beforeNavigate) beforeNavigate()
          if (navigation && backLink) navigation.pop()
          if (navigation) navigation.navigate(to, params)
        }}
        style={style}
        activeOpacity={0.8}
        disabled={disabled || navigating}
      >
        {children}
      </TouchableOpacity>
    </>
  )
}

export default withNavigation(Link)
