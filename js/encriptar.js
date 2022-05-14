let boton = document.querySelector("#encriptar")

boton.addEventListener("click",function(){
      
    let texto = document.querySelector("#entrada").value;
    texto = texto.toLowerCase();
    
    for(let i=texto.length-1; i>=0; i--){
        switch (texto.charAt(i)){
            case "a":
                texto=insercion(i,"ai",texto);
                break;
            case "e":
                texto=insercion(i,"enter",texto);
                break;
            case "i":
                texto=insercion(i,"imes",texto);
                break;
            case "o":
                texto=insercion(i,"ober",texto);
                break;
            case "u":
                texto=insercion(i,"ufas",texto);
                break;
        }
    }
    imprimir(texto);

});

function insercion(posicion, codigo,texto){
    return txt= texto.slice(0,posicion)+codigo+texto.slice(posicion+1);
}

function imprimir(texto){
    etiqueta= document.querySelector("#salida");
    etiqueta.innerHTML="";
    etiqueta.classList.add("resultado")
    etiqueta.textContent=texto;
    
}