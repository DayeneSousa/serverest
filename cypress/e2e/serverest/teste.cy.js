const { faker } = require("@faker-js/faker");

 

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
        
                json.nome = (faker.commerce.productName())
                json.preco =Number(faker.number.int({ min: 10, max: 500 }))
                json.descricao = (faker.commerce.productDescription())
                json.quantidade = (faker.number.int({ min: 1, max: 100 }))

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
        cy.log(json.nome)
    })
})
})
})


it('Deve gerar 5 produtos diferentes', () => {
  for (let i = 0; i < 5; i++) {
    const nome = faker.commerce.productName();
    const preco = faker.number.int({ min: 50, max: 300 });

    cy.log(`Produto ${i + 1}: ${nome} - R$ ${preco}`);
  }
});