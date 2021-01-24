// var tagh1 = document.querySelector("h1");
// tagh1.style.color = "red";
// tagh1.textContent = "Olá, mundo!";
// tagh1.setAttribute("class", "texto");
var btnAdd = document.querySelector("#addTarefa");
function adicionarTarefa() {
  var input = document.querySelector("input");
  var ul = document.querySelector("ul");
  //alert(input.value);
  ul.insertAdjacentHTML("beforeend", `<li> ${input.value} </li>`);
  input.value = "";
}

btnAdd.addEventListener("click", adicionarTarefa);
