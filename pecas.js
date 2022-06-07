let pesoPeca = 200
let numeroPecas = 10
let listaPecas = ["Disco de Freio", "Motor", " Pastilha de Freio", "Pneu", "Volante"] 
let nomePeca = 'Disco de Freio'

// Verificação Peso da Peça

if(pesoPeca > 100) {
    // Podemos Cadastrar
    console.log("Peso adequado, podemos cadastrar")

} else {
    //Não podemos casdastrar
    console.log("Peso menor que 100g, não podemos cadastrar")
}
// Verificação Tamanho da lista de Peças 
if (listaPecas.length >= 10) {
    //capacidade máxima atingida
    console.log("Capacidade máxima atingida")
} else {
    //Ainda há espaço para cadastro
    console.log("Ainda há espaço para castro")
}

// Verificação do nome da peça
if (nomePeca.length < 3) {
    // Nome invalido
    console.log("Nome inválido, o nome precisa ter 3 caracteres ou mais")

} else {
    // Nome de peça adequado
    console.log("Nome adequado")
}
   

