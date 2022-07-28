const cipher = {encode, decode}

function encode (offset, encodeText) {
  if (typeof offset != "number"){
    throw new TypeError("The parameter isn't a number.")
  }

  if (typeof encodeText != "string"){
    throw new TypeError("The parameter isn't a letter.")
  }

  let encodeResult = "";

  for (let i = 0; i < encodeText.length; i++){
    let asciiEncode = ((encodeText.charCodeAt(i) - 65 + offset) % 26) + 65;
    let encodedText = String.fromCharCode(asciiEncode);
    encodeResult += encodedText;
  }
  return encodeResult;
}

function decode (offset, decodeText) {
  if (typeof offset != "number"){
    throw TypeError("Invalid parameters")
  }
  if (typeof decodeText != "string"){
    throw TypeError("Invalid parameters")
  }

  let decodeResult = "";

  for (let i = 0; i < decodeText.length; i++){
      let asciiDecode = ((decodeText.charCodeAt(i) - 90 - offset) % 26) + 90; 
      let decodedText = String.fromCharCode(asciiDecode);
      decodeResult += decodedText;
  }
    return decodeResult; 
}

export default cipher;

