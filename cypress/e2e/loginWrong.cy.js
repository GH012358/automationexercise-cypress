import LandingPage from "../pages/landingPage"
import Assertion from "../assertions/assertions"
import { makeUserData } from "../support/userFactory"
import { registerUser } from "../support/registerUser"
import { pageLoginOrSignup, attemptLogin } from "../support/loginUser"
import { assertPage } from "../assertions/assertPage"

const pageLanding = new LandingPage()
const assert = new Assertion()

describe('TC 03: Log in with wrong credentials', () => {
  it('3.1 Logs in with wrong email and correct password', () => {
    
    const user = makeUserData()
    const emailWrong = `wrong.${user.email}`
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
    
    attemptLogin(emailWrong, user.password)
    
    assertPage(pageLoginOrSignup, assert, {
      path: '/login',
      title:'Automation Exercise - Signup / Login'
    })
    
    assert.beVisible(pageLoginOrSignup.messageErrorLogin())

  })

  it('3.2 Logs in with correct email and wrong password', () => {
    
    const user = makeUserData()
    const passwordWrong = `wrong.${user.password}`
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
    attemptLogin(user.email, passwordWrong)
    
    assertPage(pageLoginOrSignup, assert, {
      path: '/login',
      title:'Automation Exercise - Signup / Login'
    })
    assert.beVisible(pageLoginOrSignup.messageErrorLogin())

  })

  it('3.3 Logs in with wrong email and wrong password', () => {
    
    const user = makeUserData()
    const emailWrong = `wrong.${user.email}`
    const passwordWrong = `wrong.${user.password}`

    pageLanding.visit() 
    
    assertPage(pageLanding, assert, {
      title: "Automation Exercise",
    })

    pageLanding.buttonSignup().click()
    
    assertPage(pageLoginOrSignup, assert, {
      path: '/login',
      title:'Automation Exercise - Signup / Login'
    })

    attemptLogin(emailWrong, passwordWrong)
    
    assertPage(pageLoginOrSignup, assert, {
      path: '/login',
      title:'Automation Exercise - Signup / Login'
    })
    
    assert.beVisible(pageLoginOrSignup.messageErrorLogin())

  })
  
})
