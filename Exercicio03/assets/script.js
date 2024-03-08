
let elementoH1 = document.querySelector('.h1')

let elementoH2 = document.createElement('h2')

let createTexto = document.createTextNode('Olá mundão!!!')

elementoH2.appendChild(createTexto)

elementoH1.appendChild(elementoH2)