function enviar(){

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;

    fetch("https://crudcrud.com/api/792ef5852781402baf93259ccf9138c2/colaborativo", 
    
    { 
        headers: {"Content-Type": "application/json; charset = utf-8"},
        method: "POST",
        body: JSON.stringify({
            name: nombre,
            age: edad,
            email: correo
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Enviado con exito")
        document.getElementById("nombre").value="";
        document.getElementById("edad").value=0;
        document.getElementById("correo").value="";
    })
}

function mostrar(){
    
}

document.addEventListener("DOMContentLoaded",()=>{

    document.getElementById("enviar").addEventListener("click",()=>{
        enviar();
    })

});