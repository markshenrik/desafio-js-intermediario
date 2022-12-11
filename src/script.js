const enviar = document.getElementById("btn-enviar");
const campos = document.querySelectorAll(".obrigatorio");
const avisoArr = document.querySelectorAll(".aviso-campo");

enviar.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < campos.length; i++) {
    if (campos[i].value == "") {
      campos[i].classList.add("erro");
      avisoArr[i].classList.add("alerta-erro");
    }
  }
});

function bordaVerde(input) {
  input.classList.add("borda-verde");
  let bordaVermelha = input.classList.contains("erro");
  let inputIndex = parseFloat(input.classList[1]);
  if (bordaVermelha) {
    input.classList.remove("erro");

    avisoArr[inputIndex].classList.remove("alerta-erro");
  }
}
