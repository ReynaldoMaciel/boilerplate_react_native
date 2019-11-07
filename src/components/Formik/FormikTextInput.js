import React from 'react'
import { TextInput, Text, View } from 'react-native'

const FormikTextInput = ({
  style,
  handleChange,
  handleBlur,
  name,
  values,
  secureTextEntry,
  keyboardType,
  touched,
  errors,
  errorStyle,
  messageErrorStyle,
}) => {
  const overrideStyle = touched[name] && errors[name] ? errorStyle : null
  return (
    <View>
      <TextInput
        style={{ ...style, ...overrideStyle }}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
      />
      {touched[name] && errors[name] && (
        <Text
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
