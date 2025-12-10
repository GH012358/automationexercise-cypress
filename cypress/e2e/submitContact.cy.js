import Assertion from "../assertions/assertions"
import { assertPage } from "../assertions/assertPage"
import LandingPage from "../pages/landingPage"
import ContactUs from "../pages/contactUs"
import { makeUserData } from "../support/userFactory"

const assert = new Assertion()
const pageLanding = new LandingPage()
const pageContactUs = new ContactUs()

describe('TC 06: Contact The Website', () => {
    it('Submits a contact form with an attached file', () => {
        
        const user = makeUserData()
        pageLanding.visit()
        assertPage(pageLanding, assert, {
            title: 'Automation Exercise'
        })
        pageLanding.buttonContact().click()

        assertPage(pageContactUs, assert, {
            path: '/contact_us',
            title: 'Automation Exercise - Contact Us'
        })

        pageContactUs.inputName().type(user.fullName)
        pageContactUs.inputEmail().type(user.email)
        pageContactUs.inputSubject().type('short text mock')
        pageContactUs.textareaMessage().type('long text mock')
        pageContactUs.inputFile().selectFile('cypress/fixtures/sample.pdf')

        cy.on('window:confirm', (text) => {
            expect(text).to.eq('Press OK to proceed!')
        })

        pageContactUs.buttonSubmit().click()

        assert.beVisible(pageContactUs.messageSuccess())

        pageContactUs.buttonHome().click()

        assertPage(pageLanding, assert, {
            title: 'Automation Exercise'
        })
    })
})