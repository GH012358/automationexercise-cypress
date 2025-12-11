# automationexercise-cypress

End-to-end UI tests for [automationexercise.com](https://automationexercise.com), 
implemented with [Cypress](https://www.cypress.io/) using the Page Object Model (POM).

## Tech stack

- Node.js / npm
- Cypress ^15.6.0
- JavaScript (ES6 classes, arrow functions)
- Page Object Model (POM)

## Project structure

cypress/
 ├─ e2e/                 # Test specs (one file per test case or group)
 │   ├─ createAccount.cy.js
 │   ├─ createExisting.cy.js
 │   ├─ loginCorrect.cy.js
 │   ├─ loginWrong.cy.js
 │   ├─ logoutAccount.cy.js
 │   ├─ submitContact.cy.js
 │   └─ verifyTCPage.cy.js
 │
 ├─ pages/               # Page Object Model classes
 │   ├─ landingPage.js
 │   ├─ loginOrSignupPage.js
 │   ├─ signupDetails.js
 │   ├─ confirmCreation.js
 │   ├─ userAccount.js
 │   ├─ confirmDeletion.js
 │   ├─ contactUs.js
 │   └─ testCases.js
 │
 ├─ assertions/          # Custom assertion helpers
 │   ├─ assertions.js    # Assertion class (beVisible, haveValue, haveLengthAtLeast, etc.)
 │   └─ assertPage.js    # Helper for asserting path/title/visual key of a page
 │
 ├─ support/             # Reusable helpers & test data
 │   ├─ userFactory.js   # Generates fresh user data (fullName, email, etc.)
 │   ├─ loginUser.js     # Helper for logging in as a user
 │   └─ registerUser.js  # Helper for registering a user (precondition for login tests)
 │
 └─ fixtures/
     └─ sample.pdf       # Dummy file used for Contact Us file upload

## Implemented test cases

Based on the [Automation Exercise Test Cases](https://automationexercise.com/test_cases):

- **TC 01** – Register User  
- **TC 02** – Login User with correct credentials  
- **TC 03** – Login User with incorrect credentials  
- **TC 04** – Logout User  
- **TC 05** – Register User with existing email  
- **TC 06** – Contact Us form (with file upload & confirm dialog)  
- **TC 07** – Verify Test Cases page (at least one test case visible)

## Running the tests

1. Install dependencies:

   npm install

2. Open Cypress Test Runner:

   npm run cy:open

3. Run headless:

   npm run cy:run

## Design & implementation notes

- **Page Object Model (POM)**  
  Each major page of the site has its own class under `cypress/pages/`.  
  POM classes expose semantic methods/getters (e.g. `buttonSignup()`, `elementVisualKey()`, `inputEmail()`) instead of raw selectors in test files.  
  This keeps selectors in one place and makes tests easier to read and maintain.

- **Custom assertion helper**  
  `cypress/assertions/assertions.js` contains an `Assertion` class that wraps common Cypress assertions:

  - `beVisible(element)`
  - `eq(element, expected)`
  - `containText(element, expected)`
  - `haveValue(element, expected)`
  - `haveLengthAtLeast(elements, min)`

  Tests call these helpers instead of repeating `.should(...)` chains everywhere, which keeps them expressive and consistent.

- **Page assertion helper**  
  `cypress/assertions/assertPage.js` provides a helper to assert that the correct page is loaded:

  - checks `location.pathname` (URL path),
  - checks `document.title`,
  - checks a page-specific “visual key” element (for example, a main heading).

  This is reused across tests so page checks are centralized and uniform.

- **Reusable user data & preconditions**  

  - `cypress/support/userFactory.js` generates realistic user data with:
    - `firstName`, `lastName`, `fullName`
    - a unique `email` using a timestamp
    - address, phone, and date-of-birth fields.
  - `cypress/support/registerUser.js` and `cypress/support/loginUser.js` are used to set up preconditions
    (for example, registering a user before testing login).

  This avoids hard-coding credentials in tests and makes flows more reusable.

- **File upload & confirm dialog handling**  
  - The Contact Us test uses `.selectFile()` to upload a fixture file (`cypress/fixtures/sample.pdf`) via `<input type="file">`.
  - A `window:confirm` listener (`cy.on('window:confirm', ...)`) asserts the confirm dialog text before Cypress automatically accepts it.

  This demonstrates how to handle both file uploads and native browser dialogs in Cypress.

- **Test case alignment**  
  Each spec in `cypress/e2e/` is aligned with a test case from the  
  [Automation Exercise Test Cases](https://automationexercise.com/test_cases) page.  
  This makes it easy to map automated checks to the original manual test descriptions.
