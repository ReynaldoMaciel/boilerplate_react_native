import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from 'boilerplate_app/src/constants/colors'

export default ({
  isVisible,
  icon,
  title,
  message,
  hideIconClose,
  onPressClose,
}) => {
  return (
    <Modal useNativeDriver={true} isVisible={isVisible}>
      <View style={styles.modalContainer}>
        {!hideIconClose && (
          <View style={styles.containerIconClose}>
            <TouchableOpacity onPress={onPressClose}>
              <MaterialIcons
                name="close"
                color={colors.gray}
                size={25}
                style={styles.iconClose}
              />
            </TouchableOpacity>
          </View>
        )}
        <MaterialIcons
          name="error-outline"
          color={colors.red}
          size={40}
          style={styles.icon}
        />
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textMessage}>{message}</Text>
        <TouchableOpacity style={styles.buttonOk} onPress={onPressClose}>
          <Text style={styles.textButtonOk}>Entendi!</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}
