import FormikTextInput from 'boilerplate_app/src/components/Formik/FormikTextInput'
import Link from 'boilerplate_app/src/components/Link'
import ModalError from 'boilerplate_app/src/components/Modal/ModalError'
import colors from 'boilerplate_app/src/constants/colors'
import images from 'boilerplate_app/src/constants/images'
import { LoginCreators } from 'boilerplate_app/src/store/ducks/login'
import { Formik } from 'formik'
import React, { useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Yup from 'yup'
import userService from '../../services/userService'
import styles from './styles'
import { useSelector } from 'react-redux'
import { Types } from '../../store/ducks/login'

const Login = ({ updateLogin, navigation }) => {
  const [showModalError, setShowModalError] = useState(false)
  const dispatch = useDispatch()
  const login = useSelector(state => state.login)

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    senha: Yup.string().required(),
  })
  const requestLogin = async ({ email, senha }) => {
    try {
      dispatch({ type: Types.UPDATE_LOGIN, payload: { teste: 'teste' } })
      // const { token } = await userService.login(email, senha)
      // updateLogin({
      //   token,
      // })
      // navigation.navigate('Home')
    } catch (error) {
      console.log(error)
      setShowModalError(true)
    }
  }
  return (
    <LinearGradient
      colors={[colors.white, colors.lightblue]}
      style={styles.container}
    >
      <SafeAreaView style={styles.containerSafeArea}>
        <ModalError
          testID="modalLoginError"
          testIDButtonOk="buttonOkModalLoginError"
          isVisible={showModalError}
          title="Ops!"
          message={`Seu cadastro não foi encontrado, \n passa no RH!`}
          onPressClose={() => setShowModalError(false)}
        />
        <View style={styles.containerLogo}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.containerForm}
        >
          <Formik
            initialValues={{ email: 'r@r.com', senha: '123qwe' }}
            // initialValues={{ email: '', senha: '' }}
            onSubmit={requestLogin}
            validationSchema={LoginSchema}
          >
            {formikProps => (
              <View>
                <Text>{JSON.stringify(login)}</Text>
                <Text style={styles.label}>Email</Text>
                <FormikTextInput
                  testID="emailField"
                  testIDErrorText="emailErrorText"
                  name="email"
                  keyboardType="email-address"
                  {...formikProps}
                  style={styles.emailField}
                  errorStyle={{ borderBottomColor: '#FF4140' }}
                />
                <Text style={styles.label}>Senha</Text>
                <FormikTextInput
                  testID="passwordField"
                  testIDErrorText="passwordErrorText"
                  name="senha"
                  secureTextEntry
                  {...formikProps}
                  style={styles.passwordField}
                  errorStyle={{ borderBottomColor: '#FF4140' }}
                />
                <TouchableOpacity
                  testID="loginButton"
                  style={styles.loginButton}
                  onPress={formikProps.handleSubmit}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <Link
                  testID="registerButton"
                  to="Register"
                  style={styles.registerButton}
                >
                  <Text style={styles.registerButtonText}>Registrar</Text>
                </Link>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
        <View style={styles.containerButtons}></View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Login
