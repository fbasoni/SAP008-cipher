import cipher from './cipher.js';

document.getElementById("inputEncode").addEventListener("keyup",
function encryptLettersOnly(event){
    let toBeEncodedValue = event.target.value;
    if (toBeEncodedValue >= 32 || toBeEncodedValue <= 64 && toBeEncodedValue >= 91 || toBeEncodedValue <= 96 && toBeEncodedValue >= 123 || toBeEncodedValue <= 255){
        event.preventDefault(event);
        window.alert("A mensagem deve conter apenas letras de A a Z, sem espaçamento, pontuação ou caracteres especiais. Por favor, digite apenas letras e tente novamente.");
    }
    return
})

document.getElementById("inputDecode").addEventListener("keyup",
function decryptLettersOnly(event){
    let toBeEncodedValue = event.target.value;
    if (toBeEncodedValue >= 32 || toBeEncodedValue <= 64 && toBeEncodedValue >= 91 || toBeEncodedValue <= 96 && toBeEncodedValue >= 123 || toBeEncodedValue <= 127){
        event.preventDefault(event);
        window.alert("A mensagem deve conter apenas letras de A a Z, sem espaçamento, pontuação ou caracteres especiais. Por favor, digite apenas letras e tente novamente.");
    }
    return;
})
 //não está funcionando, também bloqueia de digitar números, só parenta funcionar porque dá pra escolher os números nas setinhas, mas não dá pra digitá-lo, também aparece o alert
document.getElementById("offsetKey").addEventListener("keypress",
function allowNumbersOnly(event){
    let offsetValue = event.target.value;
    let onlyNumbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    if (offsetValue != onlyNumbers){
        event.preventDefault(event);
        window.alert("O deslocamento deve ser um número de 1 a 100. Por favor, digite ou escolha um número e tente novamente.");
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

