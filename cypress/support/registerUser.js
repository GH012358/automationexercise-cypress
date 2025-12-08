import LandingPage from "../pages/landingPage"
import LoginOrSignupPage from "../pages/loginOrSignupPage"
import SignupDetails from "../pages/signupDetails"
import ConfirmationCreation from "../pages/confirmCreation"
import UserAccountPage from "../pages/userAccount"
import Assertion from "../assertions/assertions"
import { assertPage } from "../assertions/assertPage"

const pageLanding = new LandingPage()
const pageLoginOrSignup = new LoginOrSignupPage()
const pageSignupDetails = new SignupDetails()
const pageCreationConfirmation = new ConfirmationCreation()
const pageUserAccount = new UserAccountPage()
const assert = new Assertion()

export function registerUser (user) {

    pageLanding.visit()
    pageLanding.buttonSignup().click()
    
    assertPage(pageLoginOrSignup, assert, {
        path: '/login',
        title:'Automation Exercise - Signup / Login'
    })

    pageLoginOrSignup.inputName().type(user.fullName)
    pageLoginOrSignup.inputSignupEmail().type(user.email)
    pageLoginOrSignup.buttonSignup().click()
    
    assertPage(pageSignupDetails, assert, {
        path: '/signup',
        title:'Automation Exercise - Signup'
    })
    
    pageSignupDetails.fillSignupDetails(user)
    pageSignupDetails.buttonSignup().click()
    
    assertPage(pageCreationConfirmation, assert, {
        path: '/account_created',
        title:'Automation Exercise - Account Created'
    })
        
    pageCreationConfirmation.buttonContinue().click()
    
    assert.containText(pageUserAccount.elementVisualKey(), user.fullName)

    pageUserAccount.buttonLogout().click()
    
    assertPage(pageLoginOrSignup, assert, {
        path: '/login',
        title:'Automation Exercise - Signup / Login'
    })

}