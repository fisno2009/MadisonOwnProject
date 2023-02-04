import notification from "./components/notification";

describe('Login tests', () => {

  beforeEach(() => {
    cy.visit('/customer/account/login/')
    cy.fixture('users').as('user');
  })

  it('login successfuly', function() {
    cy.login(this.user.email, this.user.password)
    notification.checkAccount('My Dashboard')

})


})