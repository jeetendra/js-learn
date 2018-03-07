// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function _helper(str) {
    str = str.replace(/[^\w]/g, '');
    console.log(str);
    str = str.toLowerCase();
    return str.split('').sort().join('')
}

function anagrams(stringA, stringB) {
    
    return _helper(stringA) == _helper(stringB);

}

module.exports = anagrams;
