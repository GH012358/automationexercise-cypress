export default class ContactUs {
    locationPathname = () => cy.location('pathname')
    title = () => cy.title()
    elementVisualKey = () => cy.contains('h2', /Get In Touch/i)

    inputName = () => cy.get('input[name="name"]')
    inputEmail = () => cy.get('input[name="email"]')
    inputSubject = () => cy.get('input[name="subject"]')
    textareaMessage = () => cy.get('#message')
    inputFile = () => cy.get('input[name="upload_file"]')

    buttonSubmit = () => cy.get('input[name="submit"]')
    buttonHome = () => cy.contains('#form-section', /home/i).find('a')

    messageSuccess = () => cy.get('.contact-form').contains('Success! Your details have been submitted successfully.')
}
