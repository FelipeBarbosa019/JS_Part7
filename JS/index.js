const produto = document.querySelector('#produtos');
const title = document.querySelector('#title');
const name = document.querySelector('#name');
const manufacturer = document.querySelector('#manufacturer');
const year = document.querySelector('#year');
const velocity = document.querySelector('#velocity');
const acceleration = document.querySelector('#acceleration');
const exchange = document.querySelector('#exchange');
const consumption= document.querySelector('#consumption');

produto.addEventListener('change', choice);

function choice(){
    const produto = document.getElementById ('produtos').value
    let img = document.querySelector("img");

    switch (produto) {  
        case "car-1":
            img.setAttribute("src","./Imagens/car-BMW-M2.png");
            title.textContent = `Descição técnica:`
            name.textContent = `Nome: BMW M2 3.0 Turbo`
            manufacturer.textContent = `Fabricante: Bayerische Motoren Werke AG`
            year.textContent = `Ano: 2017`
            velocity.textContent = `Velocidade-máxima: 270 km/h`
            acceleration.textContent = `Aceleração 0-100 km/h: 4,3 s`
            exchange.textContent = `Câmbio: Autmático, 7 marchas`
            consumption.textContent = `Consumo urbano: 7,7 km/L`         
            break;
        case "car-2":
            img.setAttribute("src","./Imagens/car-MG5.png");
            title.textContent = `Descição técnica:`
            name.textContent = `Nome: Volkswagen Gol 2023`
            manufacturer.textContent = `Fabricante: Volkswagen`
            year.textContent = `Ano: 2023`
            velocity.textContent = `Velocidade-máxima: 169 km/h`
            acceleration.textContent = `Aceleração 0-100 km/h: 13,4 s` 
            exchange.textContent = `Câmbio: Manual, 5 marchas`
            consumption.textContent = `Consumo urbano: 9,6 km/L`  
            break;
        case "car-3":
            img.setAttribute("src","./Imagens/car-3.png");
            title.textContent = `Descição técnica:`
            name.textContent = `Nome: Mercedes-Benz CLA 2022`
            manufacturer.textContent = `Fabricante: Mercedes-Benz`
            year.textContent = `Ano: 2022`
            velocity.textContent = `Velocidade-máxima: 224 km/h`
            acceleration.textContent = `Aceleração 0-100 km/h: 7,8 s` 
            exchange.textContent = `Câmbio: Autmático, 7 marchas`
            consumption.textContent = `Consumo urbano: 7,1 km/L` 
            break;
        case "car-4":
            img.setAttribute("src","./Imagens/car-4.png");
            title.textContent = `Descição técnica:`
            name.textContent = `Nome: Hyundai Tucson 1.6 T-GDI GLS 2022`
            manufacturer.textContent = `Fabricante: Hyundai`
            year.textContent = `Ano: 2022`
            velocity.textContent = `Velocidade-máxima: 201 km/h`
            acceleration.textContent = `Aceleração 0-100 km/h: 9,1 s` 
            exchange.textContent = `Câmbio: Autmático, 7 marchas`
            consumption.textContent = `Consumo urbano: 9,9 km/L`  
            break;
        case "Selecione":
            img.setAttribute("src","");
            title.textContent = ``
            name.textContent = ``
            manufacturer.textContent = ``
            year.textContent = ``
            velocity.textContent = ``
            acceleration.textContent = `` 
            exchange.textContent = ``
            consumption.textContent = ``  
            break; 
    }    
}