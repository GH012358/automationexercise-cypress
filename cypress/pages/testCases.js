export default class TestCasesPage {
    
    locationPathname = () => cy.location('pathname')
    title = () => cy.title()
    elementVisualKey = () => cy.contains('h2', /Test Cases/i)
    
    arrayOfElementsTC = () => cy.get('h4.panel-title')

}
