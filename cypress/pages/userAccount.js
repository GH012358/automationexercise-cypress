export default class UserAccountPage {

    locationPathname = () => cy.location('pathname')
    title = () => cy.title()
    elementVisualKey = () => cy.contains(/logged in as/i)

    buttonDelete = () => cy.contains('a', /delete account/i)
    buttonLogout = () => cy.contains('a', /logout/i)

}
