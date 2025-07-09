
//comando para abrir um servidor do serveRest: npx serverest@latest//

describe('API - Teste Funcional de login', () => {
    it(`Deve realizar o login com sucesso`, () =>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
            }  

    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message', 'Login realizado com sucesso')
        const auth = response.body.authorization
        cy.log(response.body.authorization)
        Cypress.env('authorization', auth);


})
})
});




// Teste de login inválido


it(`Deve informar mensagem de validação `, () =>{
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
            "email": "fuladddno@qa.com",
            "password": "tsddvsss",
        },
        failOnStatusCode:false 

        }).then((response) => {
            // Verifica se a resposta tem status 400 (Bad Request)
            expect(response.status).to.eq(401);
      
            // Verifica se a resposta contém a mensagem de erro esperada
            expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
          

        })
    
    });