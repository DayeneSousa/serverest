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
    })
})
});