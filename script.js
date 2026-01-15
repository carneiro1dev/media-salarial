var nome = prompt('Antes de iniciarmos, digite seu nome:');

if (nome === null || nome === '') {
   alert('Você não informou seu nome.');
   nome = 'Visitante';
}

alert('Olá, ' + nome + '! Criei esse site para testar meus novos aprendizados. Estou programando em JavaScript e como pode observar acrescentei apenas alguns comandos básicos para testar meus conhecimentos.')

document.getElementById('mensagemNome').innerHTML =
   'Aqui traremos suas informações, como seu nome: <strong>' + nome + '</strong> e por quantas letras ele é composto: <strong>' + nome.length + '</strong>';



function calcularMedia() {
    var salario1 = Number(document.getElementById('salario1').value);
    var salario2 = Number(document.getElementById('salario2').value);

    if (salario1 == '' || salario2 == '') {
   alert('Por favor, preencha os dois salários.');
   return;
}
    
   document.getElementById('resultadoSalario').innerHTML =
      'Calculando média...';
   
   setTimeout(function () {
      var media = (salario1 + salario2) / 2;

   document.getElementById('resultadoSalario').innerHTML = 
      'Média salarial: <strong>' + media.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + '</strong>';

   }, 800);
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