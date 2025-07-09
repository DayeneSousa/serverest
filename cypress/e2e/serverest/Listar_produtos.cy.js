

describe('API - listar produtos', () => {
    it(`Deve listar produtos com sucesso`, () =>{
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/produtos',
            headers: {
                accept: 'application/json'
            }

    }).then((response) => {
        expect(response.status).to.equal(200)
    })
})
});