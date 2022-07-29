import cipher from './cipher.js';

const encodeTextCheck = document.getElementById("encodeTextArea");

encodeTextCheck.addEventListener("keyup",
function encodeLettersOnly(event){
    let encodedTextValue = event.target.value;
    if ((encodedTextValue >= 32 || encodedTextValue <= 64) && (encodedTextValue >= 91 || encodedTextValue <= 255)){
        window.alert("Oops! Eu só cifro letras. Por favor, digite apenas letras de A a Z (sem pontuação, acentos ou caracteres especiais) e tente novamente.");
    }
    return;
})

const decodeTextCheck = document.getElementById("decodeTextArea");

decodeTextCheck.addEventListener("keyup",
function decodeLettersOnly(event){
    let decodedTextValue = event.target.value;
    if ((decodedTextValue >= 32 || decodedTextValue <= 64) && (decodedTextValue >= 91 || decodedTextValue <= 255)){
        window.alert("Oops! Eu só decifro letras. Por favor, digite apenas letras de A a Z (sem pontuação, acentos ou caracteres especiais) e tente novamente.");
    }
    return;
})
 
const btnEncode = document.getElementById("encodeButton");

btnEncode.addEventListener("click", 
function displayEncodeResult(){
    let encodedText = document.getElementById("encodeTextArea").value;
    encodedText = encodedText.toUpperCase();
    let offsetKey = parseInt(document.getElementById("offsetInput").value);
    let encodeResult = cipher.encode(offsetKey, encodedText);

    return document.getElementById("displayedResult").innerHTML = "A mensagem criptografada é: " + '"' + encodeResult + '"';
})

const btnDecode = document.getElementById("decodeButton");

btnDecode.addEventListener("click", 
function displayDecodeResult(){
    let decodedText = document.getElementById("decodeTextArea").value;
    decodedText = decodedText.toUpperCase();
    let offsetKey = parseInt(document.getElementById("offsetInput").value);
    let decodeResult = cipher.decode(offsetKey, decodedText);

    return document.getElementById("displayedResult").innerHTML = "A mensagem descriptografada é: " + '"' + decodeResult + '"';
})

