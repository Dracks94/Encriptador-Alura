let boton2 = document.querySelector("#desencriptar")

boton2.addEventListener("click",function(){
    
    let texto = document.querySelector("#entrada").value;
    texto = texto.toLowerCase();
    
    for(let i=0; i<texto.length; i++){
        switch (texto.charAt(i)){
            case "a":
                texto=desinsercion(i,"ai",texto,"a");
                break;
            case "e":
                texto=desinsercion(i,"enter",texto,"e");
                break;
            case "i":
                texto=desinsercion(i,"imes",texto,"i");
                break;
            case "o":
                texto=desinsercion(i,"ober",texto,"o");
                break;
            case "u":
                texto=desinsercion(i,"ufas",texto,"u");
                break;
        }
    }
    imprimir(texto);

});

function desinsercion(posicion,codigo,texto,letra){

    if (codigo==(texto.slice(posicion,posicion+codigo.length))){
        return txt= texto.slice(0,posicion)+letra+texto.slice(posicion+codigo.length)
    }
    return txt=texto;
}

