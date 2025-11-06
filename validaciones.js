function validarForm(){

    let nombre = document.forms.nameForm.nombre. value;
    let mail = document.forms.nameForm.mail.value;
    let telefono = document.forms.nameForm.tel.value;
    let localidad = document.forms.nameForm.local.value;

    let mensaje = [];

    if(nombre == "" || mail == "" || telefono =="" || localidad == ""){
        mensaje.push("*Todos los campos deben estar completos");
    }
    

    if(nombre.length > 20){
        mensaje.push("*El nombre debe tener maximo 20 caracteres");
    }


    let patron = /\S+@\S+\.com$/;

    if(!patron.test(mail)){
        mensaje.push("*Debe ingresar un email valido");
    }

    let patronTel = /^\d{2,4}-\d{6,8}$/;

    if(!patronTel.test(telefono)){
        mensaje.push("*Debe ingresar un numero valido con guion en medio 111-111111");
       }


    if(mensaje.length > 0){

        let mensError ="";
        for(let i =0; i < mensaje.length; i++){
            mensError += mensaje[i] + "<br>";
        }

        document.getElementById("divError").innerHTML = mensError;
        return false;

    }

    document.getElementById("divError").style.visibility = "hidden";
    

    const crear = document.createElement("p");
    crear.innerHTML = "Los datos ingresados correctamente"
    crear.classList.add("datosCorrectos");
    document.getElementById("divMensajes").appendChild(crear);

    return false;

}
    
document.getElementById("botonEnviar").addEventListener("click", function(){
        document.getElementById("divError").style.visibility = "visible" });




   

