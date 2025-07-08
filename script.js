function calcularIMC() {
  const altura = parseFloat(document.getElementById('altura').value) /100;
  const peso = parseFloat(document.getElementById('peso').value);

  if (!altura || !peso){
    alert('Preencha os campos corretamente!!');
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(2);
  const valorIMC = document.getElementById('valorIMC');
  const mensagem = document.getElementById('mensagem');
  const imagem = document.getElementById('imagem');
  const resultado = document.getElementById('resultado');

  valorIMC.textContent = imc;

  if (imc < 18.5) {
    valorIMC.style.color = 'blue';
    mensagem.textContent = 'Atenção! Estar abaixo do peso ideal pode trazer riscos à saúde, como fraqueza, baixa imunidade e falta de nutrientes essenciais. É importante buscar uma alimentação equilibrada e, se necessário, acompanhamento profissional para garantir seu bem-estar.';
    imagem.src = 'imagens/baixopeso.png';
  } else if (imc < 25) {
    valorIMC.style.color = 'green';
    mensagem.textContent = 'Seu peso está dentro da faixa saudável, o que reduz riscos de diversas doenças. Mas isso não significa que você pode relaxar. Manter uma alimentação equilibrada e praticar atividades físicas regularmente são essenciais para sua saúde a longo prazo. Cuide-se sempre!';
    imagem.src = 'imagens/normal.png';
  } else if (imc < 30) {
    valorIMC.style.color = 'yellow';
    mensagem.textContent = 'Fique atento! O excesso de peso já pode impactar sua saúde a longo prazo. Pequenas mudanças no estilo de vida, como melhorar a alimentação e aumentar a atividade física, podem fazer toda a diferença. Este é o momento ideal para prevenir problemas futuros e buscar mais qualidade de vida.';
    imagem.src = 'imagens/sobrepeso.png';
  } else {
    valorIMC.style.color = 'red';
    mensagem.textContent = 'É hora de agir! O excesso de peso pode trazer riscos sérios à saúde, mesmo que seus exames ainda estejam normais. Quanto maior o IMC, maior a probabilidade de desenvolver doenças associadas. Buscar um estilo de vida mais saudável, com acompanhamento profissional, é essencial para reverter esse quadro e melhorar sua qualidade de vida.'
    imagem.src = 'imagens/obeso.png';
  }

  resultado.classList.add('mostrar');
  resultado.style.display = 'block';
  resultado.style.opacity = '0';
  setTimeout(() => {
  resultado.style.opacity = '1';
  resultado.classList.add('animate__animated', 'animate__fadeInUpBig');
  }, 50);
    
}

function limpar() {
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('altura').value = '';
  document.getElementById('peso').value = '';
}