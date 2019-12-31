import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import colors from '../../constants/colors'

export default ({ loading, text }) => (
  <>
    {loading && (
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: colors.blue,
          opacity: 0.7,
          zIndex: 2,
        }}
      >
        <ActivityIndicator
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
          color={colors.white}
          size="large"
        />
        <Text
          style={{
            padding: 8,
            flex: 1,
            fontSize: 20,
            color: colors.white,
            textAlign: 'center',
          }}
        >
          {text}
        </Text>
      </View>
    )}
  </>
)
