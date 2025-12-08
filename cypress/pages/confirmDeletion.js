export default class ConfirmationDeletion {

    locationPathname = () => cy.location('pathname')
    title = () => cy.title()
    elementVisualKey = () => cy.contains(/account deleted/i)

    buttonContinue = () => cy.contains(/continue/i)

}