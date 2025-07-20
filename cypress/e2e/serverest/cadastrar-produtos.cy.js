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



    it(`Deve Cadastrar produtos com sucesso`, () =>{
        cy.fixture('cadastrar-produto.json').then((json) => {
        cy.request({
            failOnStatusCode: false,
            method: 'POST',
            url: 'http://localhost:3000/produtos',
            headers: {
               'accept': 'application/json',
               'Authorization': Cypress.env('authorization'),
               'Content-Type': 'application/json'
            },
            body: json
            

    }).then((response) => {
        expect(response.status).to.equal(201)
    })
})
})
})