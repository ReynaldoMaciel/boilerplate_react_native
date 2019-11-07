import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    padding: 15,
    justifyContent: 'center',
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  textMessage: {
    textAlign: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  containerIconClose: {
    alignItems: 'flex-end',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  iconClose: {
    textAlign: 'right',
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  buttonOk: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.blue,
    borderRadius: 7,
    width: '50%',
    marginHorizontal: '25%',
    marginTop: 20,
  },
  textButtonOk: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
})
