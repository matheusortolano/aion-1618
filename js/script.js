// ATIVA O LINK DA PÁGINA ATUAL NO MENU

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);


// LÊ OS PARÂMETROS DA URL

const parametros = new URLSearchParams(location.search);

const solucao = parametros.get("solucao");
const plano = parametros.get("plano");


// SELECIONA A SOLUÇÃO NO ORÇAMENTO

if (solucao) {
  const inputSolucao = document.querySelector(
    `input[name="solucao"][value="${solucao}"]`
  );

  if (inputSolucao) {
    inputSolucao.checked = true;
  }
}


// SELECIONA O PLANO NO ORÇAMENTO

if (plano) {
  const selectPlano = document.querySelector("#plano");

  if (selectPlano) {
    selectPlano.value = plano;
  }
}

// PERGUNTAS FREQUENTES

const perguntas = document.querySelectorAll(".perguntas dt");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const item = pergunta.parentElement;

  item.classList.toggle("ativa");

  const aberta = item.classList.contains("ativa");

  pergunta.setAttribute("aria-expanded", aberta);
}

perguntas.forEach((pergunta) => {
  pergunta.setAttribute("aria-expanded", "false");

  pergunta.addEventListener("click", ativarPergunta);
});

const botoesWeb = document.querySelectorAll(".web-controles button");
const visualWeb = document.querySelector(".web-visual");

function mudarDispositivo(event) {
  const botao = event.currentTarget;
  const dispositivo = botao.dataset.device;

  visualWeb.dataset.device = dispositivo;

  botoesWeb.forEach((item) => {
    item.classList.remove("ativo");
  });

  botao.classList.add("ativo");
}

botoesWeb.forEach((botao) => {
  botao.addEventListener("click", mudarDispositivo);
});