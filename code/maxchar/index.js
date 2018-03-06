
function maxChar(str) {
    let arr = str.split('');
    let max = 0, char = ''
    let charMap = {};
    for (const iterator of arr) {
        charMap[iterator] = (charMap[iterator]) ? charMap[iterator]++ : 1;
    }

    for (const key in charMap) {
        if (charMap.hasOwnProperty(key)) {
            if(charMap[key] > max) {
                max = charMap[key];
                char = key;
            }            
        }
    }
    return char;
    

    
}

module.exports = maxChar;
