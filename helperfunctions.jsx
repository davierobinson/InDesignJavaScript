function isInt(value) { 
    return !isNaN(parseInt(value)) && (parseFloat(value) == parseInt(value)); 
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}