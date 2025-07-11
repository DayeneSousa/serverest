describe('Alterar dados do produtos', () => {
    it(`Deve Alterar o produtos informado`, () =>{
        cy.request({
            method: 'PUT',
            url: 'http://localhost:3000/produtos/1wbbkVlXgPvQLDCG',
            headers: {
               'accept': 'application/json',
               'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzUyMjAwNjkxLCJleHAiOjE3NTIyMDEyOTF9.NRrdSYDHTgcJDOyOqSvjtdy2LcDfe3wwAZYw9_Fkwbo',
               'Content-Type': 'application/json'
            },
            body: {
                     "nome": "importante ",
                     "preco": 470,
                     "descricao": "saude mental",
                     "quantidade": 381
            }
    }).then((response) => {
        expect(response.status).to.equal(200)
    })
})
});