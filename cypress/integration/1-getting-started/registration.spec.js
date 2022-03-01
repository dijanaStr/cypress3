describe('registration case', () => {
    it('visit gallery app', () => {
        cy.visit('')
    });
    
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    });
    
    it('register with valid credentials', () => {
        cy.get('input[id="first-name"]').type('Dijana')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac93+1@gmail.com')
        cy.get('input[id="password"]').type('dijana123')
        cy.get('input[id="password-confirmation"]').type('dijana123')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });
   });
   