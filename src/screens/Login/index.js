import FormikTextInput from 'boilerplate_app/src/components/Formik/FormikTextInput'
import ModalError from 'boilerplate_app/src/components/Modal/ModalError'
import colors from 'boilerplate_app/src/constants/colors'
import images from 'boilerplate_app/src/constants/images'
import { Formik } from 'formik'
import React, { useState } from 'react'
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Yup from 'yup'
import styles from './styles'
import { LoginCreators } from 'boilerplate_app/src/store/ducks/login'

const Login = ({ login, updateLogin }) => {
  const [showModalError, setShowModalError] = useState(false)
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    senha: Yup.string().required(),
  })
  const requestLogin = async () => {
    updateLogin({
      token: 't=este',
    })
  }
  return (
    <LinearGradient
      colors={[colors.white, colors.lightblue]}
      style={styles.container}
    >
      <SafeAreaView style={styles.containerSafeArea}>
        <ModalError
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
            onSubmit={requestLogin}
            validationSchema={LoginSchema}
          >
            {formikProps => (
              <View>
                <Text style={styles.label}>Email</Text>
                <FormikTextInput
                  name="email"
                  keyboardType="email-address"
                  {...formikProps}
                  style={styles.emailField}
                  errorStyle={{ borderBottomColor: '#FF4140' }}
                />
                <Text style={styles.label}>Senha</Text>
                <FormikTextInput
                  name="senha"
                  secureTextEntry
                  {...formikProps}
                  style={styles.passwordField}
                  errorStyle={{ borderBottomColor: '#FF4140' }}
                />
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={formikProps.handleSubmit}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton}>
                  <Text style={styles.registerButtonText}>Registrar</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
        <View style={styles.containerButtons}></View>
      </SafeAreaView>
    </LinearGradient>
  )
}

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...LoginCreators,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
