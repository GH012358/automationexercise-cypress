import LandingPage from "../pages/landingPage"
import UserAccountPage from "../pages/userAccount"
import Assertion from "../assertions/assertions"
import { makeUserData } from "../support/userFactory"
import { registerUser } from "../support/registerUser"
import { assertPage } from "../assertions/assertPage"
import { pageLoginOrSignup, attemptLogin } from "../support/loginUser"

const pageLanding = new LandingPage()
const pageUserAccount = new UserAccountPage()
const assert = new Assertion()

describe('TC 04: Logout the User Account', () => {
    it('Logs the User in and out of the Account', () => {

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

        attemptLogin(user.email, user.password)

        assertPage(pageUserAccount, assert, {
            path: '/',
            title: 'Automation Exercise'
        })

        assert.containText(pageUserAccount.elementVisualKey(), user.fullName)

        pageUserAccount.buttonLogout().click()

        assertPage(pageLoginOrSignup, assert, {
            path: '/login',
            title: 'Automation Exercise - Signup / Login'
        })

    })
})
