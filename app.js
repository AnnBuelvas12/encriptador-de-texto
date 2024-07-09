
function encrypt(text, shift) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
          
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        
        result += char;
    }

    return result;
}

function decrypt(text, shift) {
    return encrypt(text, (26 - shift) % 26); 
}


function encriptar() {
    let textoOriginal = document.getElementById('textoOriginal').value;
    let desplazamiento = parseInt(document.getElementById('desplazamiento').value);
    
    let textoEncriptado = encrypt(textoOriginal, desplazamiento);
    
    document.getElementById('textoEncriptado').value = textoEncriptado;
}


function desencriptar() {
    let textoEncriptado = document.getElementById('textoEncriptado').value;
    let desplazamiento = parseInt(document.getElementById('desplazamiento').value);
    
    let textoDesencriptado = decrypt(textoEncriptado, desplazamiento);
    
    document.getElementById('textoDesencriptado').value = textoDesencriptado;
}
