const cipher = {encode, decode}

function encode (offset, encodeText) {
  if (typeof offset != "number" || typeof encodeText != "string"){
    throw new TypeError("Invalid data type.") 
  }

  let encodeResult = "";                                                     //letra que quero decifrar.charCodeAt
//quando eu subtraio o código da letra que quero decifrar pelo código da primeira (A=65), ( String.charCodeAt(0) - 65 ) eu faço um deslocamento do alfabeto, me dando a posição das letras no alfabeto
//de acordo com a cifra. por ex: "B".charCodeAt(0) - 65 = 66 - 65 => 1 (logo, posição do B é 1)
//string => "bola" => "dqnc"
//offset = 2;

  for (let i = 0; i < encodeText.length; i++){
    let asciiEncode = ((encodeText.charCodeAt(i) - 65 + offset) % 26) + 65;
    let encodedText = String.fromCharCode(asciiEncode);
    encodeResult += encodedText;
  }
  return encodeResult;
}

function decode (offset, decodeText) {
  if (typeof offset != "number" || typeof decodeText != "string"){
    throw new TypeError("Invalid data type.")
  }

  let decodeResult = "";
//bola
//offset = 2;
  for (let i = 0; i < decodeText.length; i++){
      let asciiDecode = ((decodeText.charCodeAt(i) - 90 - offset) % 26) + 90; 
      let decodedText = String.fromCharCode(asciiDecode);
      decodeResult += decodedText;
  }
    return decodeResult; 
}

export default cipher;

