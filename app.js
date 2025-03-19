let numeroSecreto =  gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() { 
exibirTextoNaTela('h1', 'jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um númuro entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
  
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        ument.

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secrecto é menor!');
        } else {
            exibirTextoNaTela('p', 'O numero secrecto é maior!');
        }
        tentativas++;
        LimparCampo();
    }

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    //Código omitido

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
 
