export default class LoginOrSignupPage {

    locationPathname = () => cy.location('pathname')
    title = () => cy.title()
    elementVisualKey = () => cy.contains('h2', 'or', { matchCase: false })

    inputLoginEmail = () => cy.get('input[data-qa="login-email"]')
    inputLoginPassword = () => cy.get('input[data-qa="login-password"]')
    
    messageErrorLogin = () => cy.get('form[action="/login"]').contains(/your email or password is incorrect!/i)

    buttonLogin = () => cy.contains('button, input[type="submit"]', /^login$/i)

    inputName = () => cy.get('input[name="name"]')
    inputSignupEmail = () => cy.get('input[data-qa="signup-email"]')
    
    buttonSignup = () => cy.contains('button, input[type="submit"]', /^signup$/i)
    
    messageErrorSignup = () => cy.get('form[action="/signup"]').contains(/email address already exist!/i)

}