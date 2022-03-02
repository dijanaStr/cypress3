describe('registration case', () => {
    it('visit gallery app', () => {
        cy.visit('')
    });
    
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    });

    it('register with email without @', () => {
        cy.get('input[id="first-name"]').type('Dijana')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac93gmail.com')
        cy.get('input[id="password"]').type('dijana123')
        cy.get('input[id="password-confirmation"]').type('dijana123')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });
   




    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register without credentials', () => {
        cy.get('input[id="first-name"]').type('')
        cy.get('input[id="last-name"]').type('')
        cy.get('input[id="email"]').type('')
        cy.get('input[id="password"]').type('')
        cy.get('input[id="password-confirmation"]').type('')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });
   




    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with email that missing top level domain', () => {
        cy.get('input[id="first-name"]').type('Dijana')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac@gmail')
        cy.get('input[id="password"]').type('dijana123')
        cy.get('input[id="password-confirmation"]').type('dijana123')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });





    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with wrong password confirmation', () => {
        cy.get('input[id="first-name"]').type('Dijana')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac93+1@gmail.com')
        cy.get('input[id="password"]').type('dijana123')
        cy.get('input[id="password-confirmation"]').type('dijana12')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });





    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with first name empty', () => {
        cy.get('input[id="first-name"]').type('')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac93+1@gmail.com')
        cy.get('input[id="password"]').type('dijana123')
        cy.get('input[id="password-confirmation"]').type('dijana123')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });





    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with last name empty', () => {
        cy.get('input[id="first-name"]').type('Dijana')
        cy.get('input[id="last-name"]').type('')
        cy.get('input[id="email"]').type('dijana.strbac93+1@gmail.com')
        cy.get('input[id="password"]').type('dijana123')
        cy.get('input[id="password-confirmation"]').type('dijana123')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });






    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with all fields with spaces', () => {
        cy.get('input[id="first-name"]').type('   ')
        cy.get('input[id="last-name"]').type('   ')
        cy.get('input[id="email"]').type('   ')
        cy.get('input[id="password"]').type('   ')
        cy.get('input[id="password-confirmation"]').type('   ')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });






    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with email that alredy exist', () => {
        cy.get('input[id="first-name"]').type('Dijana')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac93@gmail.com')
        cy.get('input[id="password"]').type('dijana123')
        cy.get('input[id="password-confirmation"]').type('dijana123')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });





    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with email with missing .', () => {
        cy.get('input[id="first-name"]').type('Dijana')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac93@gmailcom')
        cy.get('input[id="password"]').type('dijana123')
        cy.get('input[id="password-confirmation"]').type('dijana123')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });






    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with space in password', () => {
        cy.get('input[id="first-name"]').type('Dijana')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac93+1@gmail.com')
        cy.get('input[id="password"]').type('dijana  123')
        cy.get('input[id="password-confirmation"]').type('dijana  123')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });






    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with all caps on a first name', () => {
        cy.get('input[id="first-name"]').type('DIJANA')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac93+1@gmail.com')
        cy.get('input[id="password"]').type('dijana123')
        cy.get('input[id="password-confirmation"]').type('dijana123')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });





   

    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with password without number', () => {
        cy.get('input[id="first-name"]').type('Dijana')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac93+1@gmail.com')
        cy.get('input[id="password"]').type('dijanastr')
        cy.get('input[id="password-confirmation"]').type('dijanastr')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });






    it('click register button', () => {
        cy.visit('/register')
        cy.get('a[href="/register"]').click()
    });
    
    it('register with password that contain less then 8 characters', () => {
        cy.get('input[id="first-name"]').type('Dijana')
        cy.get('input[id="last-name"]').type('Strbac')
        cy.get('input[id="email"]').type('dijana.strbac93+1@gmail.com')
        cy.get('input[id="password"]').type('dijana1')
        cy.get('input[id="password-confirmation"]').type('dijana1')
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
    });







    it('click register button', () => {
        cy.visit('/register')
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