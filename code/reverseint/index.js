function reverseInt(n) {
    const sign = Math.sign(n);
    n = Math.abs(n).toString().split('').reverse().join('')
    return parseInt(n) * sign;
    
}

module.exports = reverseInt;
