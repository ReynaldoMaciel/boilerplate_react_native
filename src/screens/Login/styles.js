import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerSafeArea: {
    flex: 1,
  },
  containerLogo: {
    flex: 2,
    alignItems: 'center',
  },
  logo: {
    width: '75%',
    height: 200,
  },
  containerForm: {
    flex: 4,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  emailField: {
    backgroundColor: colors.white,
    opacity: 0.6,
    fontSize: 20,
    padding: 7,
    marginTop: 3,
    // borderRadius: 4,
    borderBottomColor: 'gray',
    borderBottomWidth: 4,
  },
  passwordField: {
    backgroundColor: colors.white,
    opacity: 0.6,
    fontSize: 20,
    padding: 7,
    marginTop: 3,
    // borderRadius: 4,
    borderBottomColor: 'gray',
    borderBottomWidth: 4,
  },
  containerButtons: {
    flex: 2,
  },
  loginButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: colors.lightblue,
    padding: 10,
    marginTop: 15,
  },
  registerButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: colors.gray,
    padding: 10,
    marginTop: 15,
  },
})
