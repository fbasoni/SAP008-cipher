import cipher from './cipher.js';

const encodeTextCheck = document.getElementById("encodeTextArea");

encodeTextCheck.addEventListener("keyup",
function encodeLettersOnly(event){
    let toBeEncodedValue = event.target.value;
    if ((toBeEncodedValue >= 32 || toBeEncodedValue <= 64) && (toBeEncodedValue >= 91 || toBeEncodedValue <= 127)){
        window.alert("Oops! Eu só cifro palavras. Por favor, digite apenas letras de A a Z (sem pontuação, acentos ou caracteres especiais) e tente novamente.");
    }
    return;
})

const decodeTextCheck = document.getElementById("decodeTextArea");

decodeTextCheck.addEventListener("keyup",
function decodeLettersOnly(event){
    let toBeDecodedValue = event.target.value;
    if ((toBeDecodedValue >= 32 || toBeDecodedValue <= 64) && (toBeDecodedValue >= 91 || toBeDecodedValue <= 127)){
        window.alert("Oops! Eu só decifro palavras. Por favor, digite apenas letras de A a Z (sem pontuação, acentos ou caracteres especiais) e tente novamente.");
    }
    return;
})
 
const btnEncode = document.getElementById("encodeButton");

btnEncode.addEventListener("click", 
function encoding(){
    let toBeEncoded = document.getElementById("encodeTextArea").value;
    toBeEncoded = toBeEncoded.toUpperCase();
    let offsetKey = parseInt(document.getElementById("offsetInput").value);
    let encodeResult = cipher.encode(offsetKey, toBeEncoded);
    return document.getElementById("displayedResult").innerHTML = "A mensagem criptografada é: " + '"' + encodeResult + '"';
})

const btnDecode = document.getElementById("decodeButton");

btnDecode.addEventListener("click", 
function decoding(){
    let toBeDecoded = document.getElementById("decodeTextArea").value;
    toBeDecoded = toBeDecoded.toUpperCase();
    let offsetKey = parseInt(document.getElementById("offsetInput").value);
    let decodeResult = cipher.decode(offsetKey, toBeDecoded);
    return document.getElementById("displayedResult").innerHTML = "A mensagem descriptografada é: " + '"' + decodeResult + '"';
})

