const enviar = document.getElementById("btn-enviar");
const campos = document.querySelectorAll(".obrigatorio");
const avisoArr = document.querySelectorAll(".aviso-campo");



enviar.addEventListener("click", (e) => {
  e.preventDefault();
  
  campos.forEach((campo, index) => {
    let resulTest = ''

    if(campo.type === "number"){
      const regexTest = /^[0-9]+$/
      resulTest = regexTest.test(campo.value)
    }

    if (campo.value == "" || resulTest === false) {
      campo.classList.add("erro");
      avisoArr[index].classList.add("alerta-erro");
    }

  });

});



campos.forEach((campo, index) => {
  campo.addEventListener("input", () => {
    campo.classList.add("borda-verde");
    let bordaVermelha = campo.classList.contains("erro");
    let inputIndex = parseFloat(campo.classList[1]);
    if (bordaVermelha) {
      campo.classList.remove("erro");

      avisoArr[inputIndex].classList.remove("alerta-erro");
    }
  });

  campo.addEventListener("blur", () => {
    if(campo.value === ""){
      campo.classList.remove("borda-verde")
      campo.classList.remove("erro")
      avisoArr[index].classList.remove("alerta-erro");
    }
  })

  
});



