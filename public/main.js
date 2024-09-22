document.addEventListener("DOMContentLoaded", function(){

  let BTNLIST = [];


  function atribuirValor(tag, valor) {
    const number = document.getElementById(tag);
    number.value = valor;
  }
  
  function escreverDisplay(valor) {
    const display = document.getElementById("display");
    display.value = valor;
  }
  function apertarBotao() {
    for (let i = 1; i <= 9; i++) {
      let num = document.getElementById(`number${i}`);
  
    }
  
  }
})  


