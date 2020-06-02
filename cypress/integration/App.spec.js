describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('make sure that login button appears', () => {
        cy.visit ('/');
        cy.contains('Sign in with Google')
      });

    it('shows new goal dialog when clicking "add new goal" button', () => {
    cy.visit ('/');
    cy.contains('Add a new goal').click();
    cy.contains('Create a new goal');
    cy.contains('Submit');
    cy.contains('Cancel');
    });
  });