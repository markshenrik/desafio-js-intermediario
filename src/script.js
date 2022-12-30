const enviar = document.getElementById("btn-enviar");
const campos = document.querySelectorAll(".obrigatorio");
const avisoArr = document.querySelectorAll(".aviso-campo");

enviar.addEventListener("click", (e) => {
  e.preventDefault();

  campos.forEach((campo, index) => {
    if(campo.value == ""){
      campo.classList.add("erro");
      avisoArr[index].classList.add("alerta-erro")
    }
  })
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
