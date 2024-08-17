function encriptar(){
    let texto = document.getElementById("texto").value.toLowerCase();
    let msgencriptada = document.getElementById("msg-encriptada");
    let imag = document.getElementById("imag");
    let paragrafo = document.getElementById("paragrafo");
    let copiar = document.getElementById("copiar");

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(document.getElementById("texto").value.length > 0){
        document.getElementById("texto").value = texto;
        msgencriptada.innerText = textoCifrado;
        paragrafo.textContent = "";
        imag.style.display = "none";
        copiar.style.display = "block"

    } else {
        msgencriptada.innerText = "";
        imag.style.display = "block";
    }
    
   
}

function desencriptar() {
    let textoCifrado = document.getElementById("texto").value.toLowerCase();
    let msgencriptada = document.getElementById("msg-encriptada");
    let imag = document.getElementById("imag");
    let copiar = document.getElementById("copiar");

    let textoOriginal = textoCifrado
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (textoCifrado.length !== 0) {
        msgencriptada.textContent = textoOriginal;
        imag.style.display = "none"; 
        copiar.style.display = "block"

    } else {
        msgencriptada.textContent = "";
        imag.style.display = "block"; 
    }
}

function copiarTexto() {
    let msgencriptada = document.getElementById("msg-encriptada").innerText;
   

    if (msgencriptada) {
        navigator.clipboard.writeText(msgencriptada).then(() => {
            alert("Texto copiado com sucesso!");
        });
       
    } else {
        alert("Nada para copiar");
    }
}

