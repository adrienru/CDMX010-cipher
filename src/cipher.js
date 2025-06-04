const cipher = {
  encode(offset, string) {
    if (typeof offset !== 'number' || typeof string !== 'string') {
      throw new TypeError('Invalid argument types');
    }

    let result = '';
    offset = offset % 26; // Normalizar el offset
    for (let i = 0; i < string.length; i++) {
      const charCode = string.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // A-Z
        const encodedChar = ((charCode - 65 + offset) % 26) + 65;
        result += String.fromCharCode(encodedChar);
      } else {
        result += string[i]; // Mantener otros caracteres
      }
    }
    return result;
  },

  decode(offset, string) {
    if (typeof offset !== 'number' || typeof string !== 'string') {
      throw new TypeError('Invalid argument types');
    }

    let result = '';
    offset = offset % 26; // Normalizar el offset
    for (let i = 0; i < string.length; i++) {
      const charCode = string.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // A-Z
        const decodedChar = ((charCode - 65 - offset + 26) % 26) + 65;
        result += String.fromCharCode(decodedChar);
      } else {
        result += string[i]; // Mantener otros caracteres
      }
    }
    return result;
  }
};

export default cipher;
