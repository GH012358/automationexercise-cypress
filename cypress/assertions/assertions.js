export default class Assertion {
    
    beVisible(element) {
        element.should('be.visible')}

    eq(element, expected) {
        element.should('eq', expected)}

    containText(element, expected) {
        element.should('contain.text', expected)}

    haveValue(element, expected) {
        element.should('have.value', expected)}
    
}