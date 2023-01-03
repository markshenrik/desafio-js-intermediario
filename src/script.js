const enviar = document.getElementById("btn-enviar");
const campos = document.querySelectorAll(".obrigatorio");
const avisoArr = document.querySelectorAll(".aviso-campo");

enviar.addEventListener("click", (e) => {
  e.preventDefault();

  campos.forEach((campo, index) => {
    if (campo.value == "") {
      campo.classList.add("erro");
      avisoArr[index].classList.add("alerta-erro");
    }
  });
});



campos.forEach((campo) => {
  campo.addEventListener("input", () => {
    campo.classList.add("borda-verde");
    let bordaVermelha = campo.classList.contains("erro");
    let inputIndex = parseFloat(campo.classList[1]);
    if (bordaVermelha) {
      campo.classList.remove("erro");

      avisoArr[inputIndex].classList.remove("alerta-erro");
    }
  });
});
