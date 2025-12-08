import LandingPage from "../pages/landingPage"
import LoginOrSignupPage from "../pages/loginOrSignupPage"
import SignupDetails from "../pages/signupDetails"
import ConfirmationCreation from "../pages/confirmCreation"
import UserAccountPage from "../pages/userAccount"
import ConfirmationDeletion from "../pages/confirmDeletion"
import Assertion from "../assertions/assertions"
import { makeUserData } from "../support/userFactory"
import { assertPage } from "../assertions/assertPage"

const pageLanding = new LandingPage()
const pageLoginOrSignup = new LoginOrSignupPage()
const pageSignupDetails = new SignupDetails()
const pageCreationConfirmation = new ConfirmationCreation()
const pageUserAccount = new UserAccountPage()
const pageDeletionConfirmation = new ConfirmationDeletion()
const assert = new Assertion()

describe('TC 01: User Account Creation and Deletion', () => {
  it('Creates and deletes the user account', () => {
    const user = makeUserData()

    pageLanding.visit() 

    assertPage(pageLanding, assert, {
      title: "Automation Exercise",
    })
    
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

    assert.haveValue(pageSignupDetails.inputFullName(), user.fullName)
    assert.haveValue(pageSignupDetails.inputEmail(), user.email)

    pageSignupDetails.fillSignupDetails(user)
    pageSignupDetails.buttonSignup().click()


    assertPage(pageCreationConfirmation, assert, {
      path: '/account_created',
      title:'Automation Exercise - Account Created'
    })
        
    pageCreationConfirmation.buttonContinue().click()

    assertPage(pageUserAccount, assert, {
      path: '/',
      title:'Automation Exercise'
    })

    assert.containText(pageUserAccount.elementVisualKey(), user.fullName)

    pageUserAccount.buttonDelete().click()

    assertPage(pageDeletionConfirmation, assert, {
      path: '/delete_account',
      title:'Automation Exercise - Account Created'
    })

    pageDeletionConfirmation.buttonContinue().click()

  })
})
