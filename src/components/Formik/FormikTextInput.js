import React from 'react'
import { TextInput, Text, View } from 'react-native'

const FormikTextInput = ({
  style,
  handleChange,
  handleBlur,
  name,
  values,
  setFieldValue,
  secureTextEntry,
  keyboardType,
  touched,
  errors,
  errorStyle,
  messageErrorStyle,
  mask,
  testID,
  testIDErrorText,
}) => {
  const overrideStyle = touched[name] && errors[name] ? errorStyle : null
  const beforeChangeText = text => {
    if (mask) {
      setFieldValue(name, mask(text))
    }
    return handleChange(name)
  }
  return (
    <View>
      <TextInput
        testID={testID}
        style={{ ...style, ...overrideStyle }}
        onChangeText={mask ? beforeChangeText : handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
      />
      {touched[name] && errors[name] && (
        <Text
          testID={testIDErrorText}
          style={
            messageErrorStyle || {
              fontSize: 12,
              color: 'red',
            }
          }
        >
          {errors[name]}
        </Text>
      )}
    </View>
  )
}

export default FormikTextInput
