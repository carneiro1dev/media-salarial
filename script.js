alert('Criei esse site para testar meus novos aprendizados. Estou programando em JavaScript e como pode observar acrescentei apenas alguns comandos básicos para testar meus conhecimentos.')

var nome = prompt('Olá, qual seu nome?');

document.getElementById('mensagemNome').innerHTML =
   'Olá <strong>' + nome + '</strong>! Seja bem-vindo.';

document.getElementById('quantidadeLetras').innerHTML =
   'Seu nome tem <strong>' + nome.length + '</strong> letras';

function calcularMedia() {
    var salario1 = Number(document.getElementById('salario1').value);
    var salario2 = Number(document.getElementById('salario2').value);

    var media = (salario1 + salario2) / 2;

    document.getElementById('resultadoSalario').innerHTML = 
        'Média salarial: <strong>' + media.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + '</strong>';
}

function aumentar(id) {
   var area = document.getElementById(id);
   area.style.transform = 'scale(1.05)';
}

function voltar(id) {
   var area = document.getElementById(id);
   area.style.transform = 'scale(1)';
   area.style.boxShadow = 'none';
}

function botaoEntrou() {
   var botao = document.querySelector('button');
   botao.style.backgroundColor = '#0a9396';
}

function botaoSaiu() {
   var botao = document.querySelector('button');
   botao.style.backgroundColor = '#22222269';
}