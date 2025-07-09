
//'Cadastrar usuario invalido'

//acessar o servidor do serverest para realizar o teste
//acesso o promot de comando e digita: npx serverest@latest

describe('API - Cadastrar Usuario', () => {
    it(`Deve Cadastrar usuario com sucesso`, () =>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": "Dayene da Sousa",
                "email": "dayene@qa.com.br",
                "password": "teste",
                "administrador": "true"   
            }  

    }).then((response) => {
        expect(response.status).to.equal(201);
    })
})
});

describe('API - Cadastrar Usuario Invalido', () => {
    it(`Deve exibir mensagem de validação`, () =>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": "Dayene da Sousa",
                "email": "dayene@qa.com.br",
                "password": "teste",
                "administrador": "true"   
            },  

        failOnStatusCode:false 
        
    }).then((response) => {
        expect(response.status).to.equal(400);
        
    })
})
});
