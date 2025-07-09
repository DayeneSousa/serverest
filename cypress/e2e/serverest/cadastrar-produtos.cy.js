





describe('Cadastrar produtos', () => {
    it(`Deve Cadastrar produtos com sucesso`, () =>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/produtos',
            headers: {
               'accept': 'application/json',
               'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzUyMTA0NTgxLCJleHAiOjE3NTIxMDUxODF9.EkwbiKfZJHIIatguPuj8Y5bbW8BGkJXFnydS1qrH-UY',
               'Content-Type': 'application/json'
            },
            body: {
                 "nome": "coleta",//produto deve ser sempre alterado
                 "preco": 470,
                 "descricao": "saude",
                 "quantidade": 381 
        
            }

    }).then((response) => {
        expect(response.status).to.equal(201)
    })
})
});