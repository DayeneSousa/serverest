const { faker } = require("@faker-js/faker");


describe('Consultar produtos', () => {
    it(`Deve Consultar o produtos informado`, () =>{
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/produtos/BeeJh5lz3k6kSIzA',
            headers: {
               'accept': 'application/json',
     
            },
      

    }).then((response) => {
        expect(response.status).to.equal(200)


  }).then((response) => {
        expect(response.status).to.equal(200);
        const resultado = response.body.quantidade
        cy.log(response.body.quantidade)
        Cypress.env('quantidade', resultado); // Armazena a quantidade no ambiente do Cypress



})
})



it('Deve gerar um novo resultado na quandidade', () => {

    const quantidade = Cypress.env('quantidade');
   const numeroGerado = (faker.number.int({ min: quantidade + 1, max: quantidade + 1 }));
   cy.log(numeroGerado);
   
        Cypress.env('quantidade', numeroGerado);
})
});