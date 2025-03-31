// REVISAO PARA AVALIAÇAO

//carrinho de compra

let carrinho = [] //array vazio

function addProduto (produto){
    carrinho.push(produto) //add um elemento no array
    console.log("carrinho", carrinho)
}
function removeUltimoProduto(){
    carrinho.pop(); //remove o ultimo elemento do array
    console.log("carrinho", carrinho)
}
addProduto("Camiseta")
addProduto("Sapato")
addProduto("Calça")
removeUltimoProduto()

//outro jeito para fazer

/* let car = {"camiseta", "sapato", "calça"}
car.push("bermuda")
console.log(car)
car.pop()
console.log(car)
*/

/*
//FILA DE TENDIMENTO
let fila = []

fila.unshift("Anna") //adiciona no inicio
fila.unshift("Beatriz")
fila.unshift("Carlos")
fila.unshift("Henrique")
fila.unshift("Giovana")

if(fila.length > 3) fila.pop() //remove o ultimo se ultrapassar o limite
console.log("Fila: ", fila)
*/
//utilizando o FOR
let fila = []
let cliente = ["Ana", "Carlos", "Beatriz", "Daniel","Gabriel", "Matheus"]
let limite = 3

for(let i = 0; i < cliente.length; i++){
    fila.unshift(cliente[i])

    if(fila.length > limite){
        fila.pop() //remove o ultimo
    }
    console.log("Fila", fila)
}



//ESTOQUE DE PEÇAS
let estoque = ["peçaUm", "peçaDois", "peçaTres"]

function atualizarEstoque(novaPeca){
    estoque.unshift(novaPeca);
    estoque.pop();
    console.log("Estoque", estoque)
}
atualizarEstoque("Peça Nova")
atualizarEstoque("Outra Peça")

//Plataforma de streaming
/*
let recomendacoes = ["VideoUm", "VideoDois", "VideoTres"]
let remocoes = 0; //inicializando

function removerVideo(){
    recomentacoes.pop(); // remove o ultimo video da lista
    remocoes++; // Aumenta a contagem de remoções em 1
    if(remocoes === 3){ // Quando atingir 3
        recomendacoes.push("Novo Video") // adicionar
        remocoes = 0; //remoção é zerada
    }
    console.log("recomentacoes", recomendacoes)
}
removerVideo()
*/

//LISTA DE EVENTOS

let eventos = ["Evento1", "Evendo3"]
function gerenciarEventos(novoEvento, indice, removerIndice){
    eventos.splice(indice, 0, novoEvento);
    if(removerIndice != undefined) eventos.splice(removerIndice, 1)
    console.log("Eventos", eventos)
}

gerenciarEventos("Evento2", 1)

/*
SPLICE: ADICIONA, REMOVE OU SUBSTITUI ELEMENTO NO ARRAY
ALTERA O ARRAY ORIGINAL, REMOVE OU ADICIONA ELEMNETO

INDEXOF: RETOMA A POSIÇÃO DO ELEMENTO NO ARRAY
PROCURA UM ELEMENTO N ARRAY E RETORNA O SEU ÍNDICE. SE NAO ENCONTRAR, RETORNAR -1

*/


//EXEMPLO DE INDEXOF
let cores = ["Azul", "Verde", "vermelho"]
let indice = cores.indexOf("verde")
console.log(indice);//1
console.log(cores.indexOf("Preto")) //-1(nao encontrado)