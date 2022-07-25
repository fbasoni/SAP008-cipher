import cipher from './cipher.js';

const inptEncodeCheck = document.getElementById("inputEncode");

inptEncodeCheck.addEventListener("keyup",
function encryptLettersOnly(event){
    let toBeEncodedValue = event.target.value;
    if ((toBeEncodedValue >= 33 || toBeEncodedValue <= 64) && (toBeEncodedValue >= 91 || toBeEncodedValue <= 127)){
        window.alert("Oops! Eu só cifro palavras. Por favor, digite apenas letras de A a Z (sem pontuação, acentos ou caracteres especiais) e tente novamente.");
    }
    return
})

const inptDecodeCheck = document.getElementById("inputDecode");

inptDecodeCheck.addEventListener("keyup",
function decryptLettersOnly(event){
    let toBeDecodedValue = event.target.value;
    if ((toBeDecodedValue >= 33 || toBeDecodedValue <= 64) && (toBeDecodedValue >= 91 || toBeDecodedValue <= 127)){
        window.alert("Oops! Eu só decifro palavras. Por favor, digite apenas letras de A a Z (sem pontuação, acentos ou caracteres especiais) e tente novamente.");
    }
    return;
})
 
const btnEncode = document.getElementById("encodeButton");

btnEncode.addEventListener("click", 
function encrypt(){
    let toBeEncoded = document.getElementById("inputEncode").value;
    toBeEncoded = toBeEncoded.toUpperCase();
    let shiftingAmount = parseInt(document.getElementById("offsetKey").value);
    let encodeResult = cipher.encode(shiftingAmount, toBeEncoded);
    document.getElementById("resultado").innerHTML = "A mensagem criptografada é: " + '"' + encodeResult + '"';
})

const btnDecode = document.getElementById("decodeButton");

btnDecode.addEventListener("click", 
function decrypt(){
    let toBeDecoded = document.getElementById("inputDecode").value;
    toBeDecoded = toBeDecoded.toUpperCase();
    let shiftingAmount = parseInt(document.getElementById("offsetKey").value);
    let decodeResult = cipher.decode(shiftingAmount, toBeDecoded);
    document.getElementById("resultado").innerHTML = "A mensagem descriptografada é: " + '"' + decodeResult + '"'
})

