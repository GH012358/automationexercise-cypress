import LandingPage from "../pages/landingPage"
import TestCasesPage from "../pages/testCases"
import Assertion from "../assertions/assertions"
import { assertPage } from "../assertions/assertPage"

const pageLanding = new LandingPage()
const pageTestCases = new TestCasesPage()
const assert = new Assertion()

describe('TC 07: Verify the Test Cases Page', () => {
    it('Verifies the Test Cases page contains at least one test case', () => {

        pageLanding.visit()
        assertPage(pageLanding, assert, {
            title: 'Automation Exercise'
        })

        pageLanding.buttonTestCases().click()

        assertPage(pageTestCases, assert, {
            path: '/test_cases',
            title: 'Automation Practice Website for UI Testing - Test Cases'
        })

        assert.haveLengthAtLeast(pageTestCases.arrayOfElementsTC(), 1)
        assert.beVisible(pageTestCases.arrayOfElementsTC().first())
    })
})
