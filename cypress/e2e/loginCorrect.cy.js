import LandingPage from "../pages/landingPage"
import UserAccountPage from "../pages/userAccount"
import ConfirmationDeletion from "../pages/confirmDeletion"
import Assertion from "../assertions/assertions"
import { makeUserData } from "../support/userFactory"
import { registerUser } from "../support/registerUser"
import { pageLoginOrSignup, attemptLogin } from "../support/loginUser"
import { assertPage } from "../assertions/assertPage"

const pageLanding = new LandingPage()
const pageUserAccount = new UserAccountPage()
const pageDeletionConfirmation = new ConfirmationDeletion()
const assert = new Assertion()

describe('TC 02: Log in with correct credentials', () => {
  it('Logs in with correct credentials, and deletes the account', () => {
    
    const user = makeUserData()
    // precondition
    registerUser(user)

    pageLanding.visit() 
    
    assertPage(pageLanding, assert, {
      title: "Automation Exercise",
    })

    pageLanding.buttonSignup().click()
    
    assertPage(pageLoginOrSignup, assert, {
      path: '/login',
      title:'Automation Exercise - Signup / Login'
    })
            
    attemptLogin(user.email, user.password)
   
    assertPage(pageUserAccount, assert, {
      path: '/',
      title:'Automation Exercise'
    })
    
    pageUserAccount.buttonDelete().click()
    
    assertPage(pageDeletionConfirmation, assert, {
      path: "/delete_account",
      title:'Automation Exercise - Account Created'
    })
    
  });
});
