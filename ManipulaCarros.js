var sqlite = require('sqlite3');    //Biblioteca de Banco de dados SQL
var rs = require('readline-sync');      //Biblioteca de Entrada pelo Terminal

        // Bloco de Conexão c o Banco
var bd = new sqlite.Database('./garagem.db', (erro) => {
    if (erro) {
        console.error(erro.message)
    } else {
        console.log('Banco Conectado')
        // bd.run('CREATE TABLE Carros (marca text,modelo text,cor text,ano integer)');
    }
})

function CadastrarCarro() {
    console.log('====== Cadastrar Carro =======');
    var marca = rs.question("Marca do carro: ");
    var modelo = rs.question("Modelo: ");
    var cor = rs.question("Cor: ");
    var ano = rs.questionInt("Ano: ");
    var carro = [marca, modelo, cor, ano]

    var query = 'INSERT INTO Carros(marca, modelo, cor, ano) VALUES (?, ?, ?, ?)'

    bd.run(query, carro, erro => {
        if (erro) {
            console.log(erro.message)
        } else { console.log('Carro Cadastrado Com Sucesso') }
    });

}

function ListaCarros() {
    console.log("====== Listando todos os Carros em Formato JSON ======");

    var query = "SELECT * FROM Carros";

    bd.all(query, [], (erro, rows) => {
        if (erro) console.log(erro.message)
        else {
            rows.forEach((carro) => {
                console.log(carro)
            });
        }
    });
}

function AtualizaCarros(){
    console.log('======== Atualizar Carro ========')
    var carrosq_mudarao = rs.questionInt('Quer atualizar os carros de que Ano: ')
    var marca = rs.question('Marca: ');
    var modelo = rs.question('Modelo: ');
    var cor = rs.question('Cor: ');
    var ano = rs.questionInt('Ano: ');
    var dados_do_Carro = [marca, modelo, cor, ano, carrosq_mudarao];

    var query = "UPDATE Carros SET marca = ?, modelo = ?, cor = ?, ano = ? WHERE ano = ?"

    bd.run(query, dados_do_Carro, erro => {
        if(erro){
            console.log(erro.message)
        } else {
            console.log("Carro Atualizado !")
        }
    })
}

function DeletaCarros(){
    console.log('=!=!=!= Apagar Carro =!=!=!=')
    var modelo_excluido = rs.question("Excluir que modelo(s) de Carro: ")

    bd.run('DELETE FROM Carros WHERE modelo = ?', modelo_excluido, erro => {
        if(erro){
            console.log(erro.message);
        } else {
            console.log('Todos os Carros C o Modelo', modelo_excluido, "foram Excluidos !" )
        }
    })
}

function MenudeOpcoes(){
var action = rs.questionInt('\
======= Menu ====================\n\
(1) - Cadastrar Carro\n\
(2) - Listar Todos os Carros\n\
(3) - Atualizar Carros de X Ano\n\
(4) - Excluir X modelo de Carro\n\
----------------------------------');
return action;
}

switch(MenudeOpcoes()){
    case 1:
        CadastrarCarro();
        break
    case 2:
        ListaCarros();
        break
    case 3:
        AtualizaCarros();
        break
    case 4:
        DeletaCarros();
        break
    default:
        MenudeOpcoes();
}