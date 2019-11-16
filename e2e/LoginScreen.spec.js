describe('Login Screen', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative()
  // })

  it('should have a email field', async () => {
    await expect(element(by.id('emailField'))).toBeVisible()
  })

  it('should have a password field', async () => {
    await expect(element(by.id('passwordField'))).toBeVisible()
  })

  it('should have a login button', async () => {
    await expect(element(by.id('loginButton'))).toBeVisible()
  })

  it('should have a register button', async () => {
    await expect(element(by.id('registerButton'))).toBeVisible()
  })

  it('should require email and password', async () => {
    // await element(by.id('emailField')).typeText('notvalidemail@email')
    await element(by.id('loginButton')).tap()
    await expect(element(by.id('emailErrorText'))).toBeVisible()
    await expect(element(by.id('passwordErrorText'))).toBeVisible()
  })

  it('should require only password when email field is valid', async () => {
    await element(by.id('emailField')).typeText('test@email.com')
    await element(by.id('loginButton')).tap()
    await expect(element(by.id('emailErrorText'))).toBeNotVisible()
    await expect(element(by.id('passwordErrorText'))).toBeVisible()
  })

  it('should require only email when password field is valid', async () => {
    await element(by.id('emailField')).clearText()
    await element(by.id('passwordField')).typeText('123qwe')
    await element(by.id('loginButton')).tap()
    await expect(element(by.id('emailErrorText'))).toBeVisible()
    await expect(element(by.id('passwordErrorText'))).toBeNotVisible()
  })

  it('should show message when login fails', async () => {
    await element(by.id('passwordField')).clearText()
    await element(by.id('emailField')).typeText(
      'usuarionaocadastrado@email.com'
    )
    await element(by.id('passwordField')).typeText('123456')
    await element(by.id('loginButton')).tap()
    await expect(element(by.id('modalLoginError'))).toBeVisible()
    await element(by.id('buttonOkModalLoginError')).tap()
  })
})
