import cipher from './cipher.js';

const encodeTextCheck = document.getElementById("encodeTextArea");

encodeTextCheck.addEventListener("keyup",
function encodeLettersOnly(event){
    let textToBeEncodedValue = event.target.value;
    if ((textToBeEncodedValue >= 32 || textToBeEncodedValue <= 64) && (textToBeEncodedValue >= 91 || textToBeEncodedValue <= 255)){
        window.alert("Oops! Eu só cifro palavras. Por favor, digite apenas letras de A a Z (sem pontuação, acentos ou caracteres especiais) e tente novamente.");
    }
    return;
})

const decodeTextCheck = document.getElementById("decodeTextArea");

decodeTextCheck.addEventListener("keyup",
function decodeLettersOnly(event){
    let textToBeDecodedValue = event.target.value;
    if ((textToBeDecodedValue >= 32 || textToBeDecodedValue <= 64) && (textToBeDecodedValue >= 91 || textToBeDecodedValue <= 255)){
        window.alert("Oops! Eu só decifro palavras. Por favor, digite apenas letras de A a Z (sem pontuação, acentos ou caracteres especiais) e tente novamente.");
    }
    return;
})
 
const btnEncode = document.getElementById("encodeButton");

btnEncode.addEventListener("click", 
function encoding(){
    let textToBeEncoded = document.getElementById("encodeTextArea").value;
    textToBeEncoded = textToBeEncoded.toUpperCase();
    let offsetKey = parseInt(document.getElementById("offsetInput").value);
    let encodeResult = cipher.encode(offsetKey, textToBeEncoded);

    return document.getElementById("displayedResult").innerHTML = "A mensagem criptografada é: " + '"' + encodeResult + '"';
})

const btnDecode = document.getElementById("decodeButton");

btnDecode.addEventListener("click", 
function decoding(){
    let textToBeDecoded = document.getElementById("decodeTextArea").value;
    textToBeDecoded = textToBeDecoded.toUpperCase();
    let offsetKey = parseInt(document.getElementById("offsetInput").value);
    let decodeResult = cipher.decode(offsetKey, textToBeDecoded);

    return document.getElementById("displayedResult").innerHTML = "A mensagem descriptografada é: " + '"' + decodeResult + '"';
})

