const CEP = document.querySelector ('#CEP')

document.addEventListener("keydown", function(event) {

    let tamanho = CEP.value.length
    console.log(tamanho)
    if (event.key === "Backspace"){
        return
    }
    if (tamanho >= 9){
        event.preventDefault ();
        return
    }
    if (event.key >= 0 && event.key <= 9){
        if (tamanho === 5){
            CEP.value += "-"
        }
        return
    }
    
    event.preventDefault ();
})