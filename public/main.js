const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  alert("Formulário enviado com sucesso");
  e.preventDefault();
});
