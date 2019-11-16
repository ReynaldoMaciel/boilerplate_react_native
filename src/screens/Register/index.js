import FormikTextInput from 'boilerplate_app/src/components/Formik/FormikTextInput'
import ModalError from 'boilerplate_app/src/components/Modal/ModalError'
import colors from 'boilerplate_app/src/constants/colors'
import images from 'boilerplate_app/src/constants/images'
import Link from 'boilerplate_app/src/components/Link'
import { Formik } from 'formik'
import React, { useState } from 'react'
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Yup from 'yup'
import styles from './styles'
import { LoginCreators } from 'boilerplate_app/src/store/ducks/login'
import cpf from '../../utils/masks/cpf'
import telefone from '../../utils/masks/telefone'
import date from '../../utils/masks/date'

const Login = ({ updateLogin }) => {
  const [showModalError, setShowModalError] = useState(false)
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    cpf: Yup.string().required(),
    telefone: Yup.string().required(),
    nascimento: Yup.string().required(),
    senha: Yup.string().required(),
    confirmacao: Yup.string().required(),
  })
  const requestRegister = async () => {
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
        <KeyboardAvoidingView behavior={'padding'}>
          <ScrollView showsVerticalScrollIndicator={false}>
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
            <View style={styles.containerForm}>
              <Formik
                initialValues={{ email: '', senha: '' }}
                onSubmit={requestRegister}
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
                    <Text style={styles.label}>CPF</Text>
                    <FormikTextInput
                      name="cpf"
                      keyboardType="numeric"
                      {...formikProps}
                      mask={cpf}
                      style={styles.emailField}
                      errorStyle={{ borderBottomColor: '#FF4140' }}
                    />
                    <Text style={styles.label}>Telefone</Text>
                    <FormikTextInput
                      name="telefone"
                      keyboardType="numeric"
                      {...formikProps}
                      mask={telefone}
                      style={styles.emailField}
                      errorStyle={{ borderBottomColor: '#FF4140' }}
                    />
                    <Text style={styles.label}>Data de nascimento</Text>
                    <FormikTextInput
                      name="nascimento"
                      keyboardType="numeric"
                      {...formikProps}
                      mask={date}
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
                    <Text style={styles.label}>Confirmação</Text>
                    <FormikTextInput
                      name="confirmacao"
                      secureTextEntry
                      {...formikProps}
                      style={styles.passwordField}
                      errorStyle={{ borderBottomColor: '#FF4140' }}
                    />
                    <TouchableOpacity
                      onPress={formikProps.handleSubmit}
                      style={styles.registerButton}
                    >
                      <Text style={styles.registerButtonText}>Registrar</Text>
                    </TouchableOpacity>
                    <Link to="Login">
                      <Text style={styles.backButtonText}>Voltar</Text>
                    </Link>
                  </View>
                )}
              </Formik>
            </View>
            <View style={styles.containerButtons}></View>
          </ScrollView>
        </KeyboardAvoidingView>
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
