const entrada = document.querySelector("#entrada");
const chat = document.querySelector("#chat");
const enviar = document.querySelector("#enviar");
const limpar = document.querySelector("#limpar");

enviar.addEventListener("click", function() {
    if (entrada.value != "") {
        chat.textContent += ` \n ${entrada.value}`
        chat.scrollTop += 5000;
        entrada.value = "";
        return;
    }
})

document.addEventListener("keypress", function(e) {
    if (entrada.value != "" && e.key === "Enter") {
        chat.textContent += "\n " + entrada.value;
        chat.scrollTop += 5000;
        entrada.value = "";
        return;
    }
})

limpar.addEventListener("click", function() {
    chat.textContent = "";
    return;
});
