import cipher from './cipher.js';

document.getElementById("inputEncode").addEventListener("keyup",
function encryptLettersOnly(event){
    let toBeEncodedValue = event.target.value;
    if ((toBeEncodedValue >= 32 || toBeEncodedValue <= 64) && (toBeEncodedValue >= 91 || toBeEncodedValue <= 96) && (toBeEncodedValue >= 123 || toBeEncodedValue <= 255)){
        window.alert("A palavra deve conter apenas letras de A a Z, sem espaçamento, pontuação ou caracteres especiais. Por favor, tente novamente.");
    }
    return
})

document.getElementById("inputDecode").addEventListener("keyup",
function decryptLettersOnly(event){
    let toBeEncodedValue = event.target.value;
    if (toBeEncodedValue >= 32 || toBeEncodedValue <= 64 && toBeEncodedValue >= 91 || toBeEncodedValue <= 96 && toBeEncodedValue >= 123 || toBeEncodedValue <= 127){
        event.preventDefault(event);
        window.alert("A palavra deve conter apenas letras de A a Z, sem espaçamento, pontuação ou caracteres especiais. Por favor, tente novamente.");
    }
    return;
})
 
const btnEncode = document.getElementById("encodeButton");

btnEncode.addEventListener("click", 
function toEncrypt(){
    let toBeEncoded = document.getElementById("inputEncode").value;
    toBeEncoded = toBeEncoded.toUpperCase();
    let shiftingAmount = parseInt(document.getElementById("offsetKey").value);
    let encodeResult = cipher.encode(shiftingAmount, toBeEncoded);
    document.getElementById("resultado").innerHTML = "A mensagem criptografada é: " + '"' + encodeResult + '"';
})

const btnDecode = document.getElementById("decodeButton");

btnDecode.addEventListener("click", 
function toDecrypt(){
    let toBeDecoded = document.getElementById("inputDecode").value;
    toBeDecoded = toBeDecoded.toUpperCase();
    let shiftingAmount = parseInt(document.getElementById("offsetKey").value);
    let decodeResult = cipher.decode(shiftingAmount, toBeDecoded);
    document.getElementById("resultado").innerHTML = "A mensagem descriptografada é: " + '"' + decodeResult + '"'
})

