import LandingPage from "../pages/landingPage"
import Assertion from "../assertions/assertions"
import { pageLoginOrSignup } from "../support/loginUser"
import { makeUserData } from "../support/userFactory"
import { registerUser } from "../support/registerUser"
import { assertPage } from "../assertions/assertPage"


const pageLanding = new LandingPage()
const assert = new Assertion()

describe('TC 05: Create Account with a Used Email', () => {
    it('Attempts to create an account with a used email', () => {
        const user = makeUserData()

        registerUser(user)

        pageLanding.visit()

        assertPage(pageLanding, assert, {
            title: 'Automation Exercise'
        })

        pageLanding.buttonSignup().click()

        assertPage(pageLoginOrSignup, assert, {
            path: '/login',
            title: 'Automation Exercise - Signup / Login'
        })

        pageLoginOrSignup.inputName().type(user.fullName)
        pageLoginOrSignup.inputSignupEmail().type(user.email)
        pageLoginOrSignup.buttonSignup().click()

        assertPage(pageLoginOrSignup, assert, {
            path: '/signup',
            title: 'Automation Exercise - Signup / Login'
        })

        assert.beVisible(pageLoginOrSignup.messageErrorSignup())

    }) 
})