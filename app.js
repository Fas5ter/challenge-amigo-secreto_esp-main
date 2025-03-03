// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo(){
    amigo = document.getElementById("amigo").value;
    // Validación de campo vacío
    if (amigo  == ""){
        alert("Debe ingresar un nombre")
    // Validación de nombre con números o caracteres especiales
    } else if (!/^[a-zA-Z ]+$/.test(amigo)){
        alert("El nombre no puede contener números ni caracteres especiales")
    } else {
        amigos.push(amigo)
        document.getElementById("amigo").value = ""
        document.getElementById("amigo").focus()
        // console.log(amigos)
    }
    actualizarListaAmigos()
}

function actualizarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML = ""
    amigos.forEach(function(amigo){
        let li = document.createElement("li")
        li.textContent = amigo
        listaAmigos.appendChild(li)
    })
}

function sortearAmigo(){
    if (amigos.length < 2){
        alert("Debe ingresar al menos 2 amigos")
    } else{
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
        document.getElementById("resultado").textContent = `El amigo secreto es: ${amigoSorteado}`
    }
}

function reiniciar(){
    amigos = []
    document.getElementById("listaAmigos").innerHTML = ""
    document.getElementById("resultado").textContent = ""
    document.getElementById("amigo").focus()
}