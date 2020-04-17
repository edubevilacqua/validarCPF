exports.validarCPF = function(cpf) {
  const numberPattern = /\d+/g;
  const digits = cpf.match(numberPattern).join([]).split('');

  if (digits.length != 11) {
    return false;
  }

  digits.forEach(element, index => {
    digits[index] = parseInt(element);
  });

  const vdigit1 = ((digits[0] * 10 + digits[1] * 9 + digits[2] * 8 + digits[3] * 7 
                + digits[4] * 6 + digits[5] * 5 + digits[6] * 4 + digits[7] * 3 + digits[8] * 2)*10)%11;
  
  if (vdigit1 == 10) {
    vdigit1 = 0;
  }

  if (vdigit1 != digits[9]){
    return false;
  }

  const vdigit2 = ((digits[0] * 11 + digits[1] * 10 + digits[2] * 9 + digits[3] * 8 
    + digits[4] * 7 + digits[5] * 6 + digits[6] * 5 + digits[7] * 4 + digits[8] * 3 + digits[9] * 2)*10)%11;

  if (vdigit2 == 10) {
    vdigit2 = 0;
  }

  if (vdigit2 != digits[10]){
    return false;
  }

  return true
}