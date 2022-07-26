const cipher = {encode, decode}

function encode (offset, encryptText) {
  if (typeof offset != "number"){
    throw TypeError("Invalid parameters")
  }

  if (typeof encryptText != "string"){
    throw TypeError("Invalid parameters")
  }

  let encryptationResult = "";

  for (let i = 0; i < encryptText.length; i++){
    let encryptation = ((encryptText.charCodeAt(i) - 65 + offset) % 26) + 65;
    let encryptedText = String.fromCharCode(encryptation);
    encryptationResult += encryptedText;
  }
  return encryptationResult;
}

function decode (offset, decryptText) {
  if (typeof offset != "number"){
    throw TypeError("Invalid parameters")
  }
  if (typeof decryptText != "string"){
    throw TypeError("Invalid parameters")
  }


  let decryptationResult = "";

  for (let i = 0; i < decryptText.length; i++){
      let decryptation = ((decryptText.charCodeAt(i) - 65 - offset) % 26) + 65; 
      let decryptedText = String.fromCharCode(decryptation);
      decryptationResult += decryptedText;
  }
    return decryptationResult; 
}

export default cipher;
