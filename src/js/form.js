const inputText = document.querySelectorAll(".inputText");

const btn = document.querySelector(".send");

const message = 'campo obrigatório'

btn.addEventListener("click", () => {
  inputText.forEach((input) => {
    if (input.value === "") {
      input.classList.add("not-filled"); //vermelho
      input.nextElementSibling.textContent = message

    } else { 
      input.classList.add("filled"); //verde
      input.nextElementSibling.textContent = ""
    }
  });
});
