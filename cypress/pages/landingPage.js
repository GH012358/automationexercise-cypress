export default class LandingPage {
    
    visit = () => cy.visit("/")
    title = () => cy.title()
    elementVisualKey = () => cy.contains('h2', 'Full-Fledged practice website for Automation Engineers')

    buttonSignup = () => cy.contains('a', 'Signup / Login', { matchCase: false })
    buttonContact = () => cy.contains('a', 'Contact us', { matchCase: false })
    buttonTestCases = () => cy.contains('a', 'Test Cases', { matchCase: false })

}
