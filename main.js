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
}

.fundo-preto{
  background: black;
  color: white;
}

