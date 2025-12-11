export default class ConfirmationCreation {

    locationPathname = () => cy.location('pathname')
    title = () => cy.title()
    elementVisualKey = () => cy.contains('h2', 'Account Created!', { matchCase: false })

    buttonContinue = () => cy.contains('a, button', /^continue$/i)

}
