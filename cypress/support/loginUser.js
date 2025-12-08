import LoginOrSignupPage from "../pages/loginOrSignupPage"

export const pageLoginOrSignup = new LoginOrSignupPage()

export function attemptLogin (email, password) {
  
    pageLoginOrSignup.inputLoginEmail().clear().type(email)
    pageLoginOrSignup.inputLoginPassword().clear().type(password)
    
    pageLoginOrSignup.buttonLogin().click()
    
}