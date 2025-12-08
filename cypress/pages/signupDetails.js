export default class SignupDetails {

    locationPathname = () => cy.location('pathname')
    title = () => cy.title()
    elementVisualKey = () => cy.contains('h2', 'Enter Account Information', { matchCase: false })

    checkboxGender = () => cy.get('#id_gender1, #id_gender2').first()

    inputFullName = () => cy.get('input#name')
    inputEmail = () => cy.get('input#email')

    inputPassword = () => cy.get('input#password')

    selectDay = () => cy.get('select#days')
    selectMonth = () => cy.get('select#months')
    selectYear = () => cy.get('select#years')

    checkboxNews = () => cy.get('#newsletter')
    checkboxOffers = () => cy.get('#optin')

    inputFirstName = () => cy.get('input#first_name')
    inputLastName = () => cy.get('input#last_name')

    inputCompany = () => cy.get('input#company')

    inputAddress1 = () => cy.get('input#address1')
    inputAddress2 = () => cy.get('input#address2')
    inputCountry = () => cy.get('select#country')
    inputState = () => cy.get('input#state')
    inputCity = () => cy.get('input#city')
    inputZipcode = () => cy.get('input#zipcode')

    inputCellNum = () => cy.get('input#mobile_number')

    buttonSignup = () => cy.contains('button, input[type="submit"]', /create account/i)

    fillSignupDetails = (user) => {

        this.checkboxGender().check({ force: true })
        this.inputPassword().type(user.password)

        this.selectDay().select(user.day)
        this.selectMonth().select(user.month)
        this.selectYear().select(user.year)

        this.checkboxNews().check({ force: true })
        this.checkboxOffers().check({ force: true })

        this.inputFirstName().type(user.firstName)
        this.inputLastName().type(user.lastName)

        this.inputCompany().type(user.company)

        this.inputAddress1().type(user.address1)
        this.inputAddress2().type(user.address2)
        this.inputCountry().select(user.country)
        this.inputState().type(user.state)
        this.inputCity().type(user.city)
        this.inputZipcode().type(user.zipcode)

        this.inputCellNum().type(user.mobile)

    }
    
}