describe('failing test', function () {

  beforeEach(function () {
    return cy.visit('http://localhost:8080/index.html');
  });

  it('Should retry if element not found (normal).', function () {
    return cy.get('.list').find('li').click();
  });

  it('Should retry if element not found (wrap).', function () {
    return cy.get('.list').then(function ($el) {
      return cy.wrap($el).find('li').click();
    });
  });

});