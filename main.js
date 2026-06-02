const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}
<div class="aba-conteudo ativo">
  <h3 class="aba-conteudo-titulo-principal">Estudar 4 cursos na Alura</h3>
  <h4 class="aba-conteudo-titulo-secundario">
    Tempo para completar o objetivo
  </h4>
  <div class="contador"></div>
</div>
<div class="aba-conteudo ativo">
  <h3 class="aba-conteudo-titulo-principal">Estudar 4 cursos na Alura</h3>
  <h4 class="aba-conteudo-titulo-secundario">
    Tempo para completar o objetivo
  </h4>
  <div class="contador"></div>
</div>
<div class="aba-conteudo">
  <h3 class="aba-conteudo-titulo-principal">Criar 5 projetos em Javascript</h3>
  <h4 class="aba-conteudo-titulo-secundario">
    Tempo para completar o objetivo
  </h4>
  <div class="contador"></div>
</div>
<div class="aba-conteudo">
  <h3 class="aba-conteudo-titulo-principal">
    Criar um portfolio com os meus 3 melhores projetos
  </h3>
  <h4 class="aba-conteudo-titulo-secundario">
    Tempo para completar o objetivo
  </h4>
  <div class="contador"></div>
</div>
<div class="aba-conteudo">
  <h3 class="aba-conteudo-titulo-principal">
    Atualizar meu currículo com os certificados da Alura
  </h3>
  <h4 class="aba-conteudo-titulo-secundario">
    Tempo para completar o objetivo
  </h4>
  <div class="contador"></div>
</div>
const contadores = document.querySelectorAll(".contador");
contadores[0].textContent = "Contagem regressiva";
const tempoObjetivo1 = new Date("2024-10-05");

contadores[0].textContent = tempoObjetivo1;
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
<button class="botao">Escuro</button>
.botao{
  padding: 2em; 
.fundo-preto{
  background: black;
  color: white;
}.conteudo {
    display: flex;
    justify-content: center;
    text-align: center;
}//comecaCronometro();

<div class="contador">
  <div class="contador-digito"></div>
</div><div class="contador">
  <div class="contador-digito">
    <p class="contador-digito-numero">7</p>
    <p class="contador-digito-texto">dias</p>
  </div><div class="contador">
  <div class="contador-digito">
    <p class="contador-digito-numero">7</p>
    <p class="contador-digito-texto">dias</p>
  </div>
  <div class="contador-digito">
    <p class="contador-digito-numero">7</p>
    <p class="contador-digito-texto">horas</p>
  </div>
  <div class="contador-digito">
    <p class="contador-digito-numero">7</p>
    <p class="contador-digito-texto">min</p>
  </div>
  <div class="contador-digito">
    <p class="contador-digito-numero">7</p>
    <p class="contador-digito-texto">seg</p>
  </div>
</div>
</div>comecaCronometro();function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}if (tempoFinal > 0) {
  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
} else {
  return [0, 0, 0, 0];
}function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[0]);
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
  document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
  document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
  document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[1])[0];
  document.getElementById("horas0").textContent = calculaTempo(tempos[1])[1];
  document.getElementById("min0").textContent = calculaTempo(tempos[1])[2];
  document.getElementById("seg0").textContent = calculaTempo(tempos[1])[3];
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  if (tempoFinal > 0) {
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0];
  }
}
