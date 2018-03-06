const reverse = require('../reversestring').reverse;
const reversePipe = require('../reversestring').reversePipe;
var Rx = require('rxjs/Rx');

//SOLUTION 1
// function palindrome(str) {
//     const len = str.length;
//     let s1 = str.substring(0, len);
//     let s2 = str.substring(-len);
//     s2 = reverse(s2);
//     return s1 == s2;
// }


//SOLUTION 2
function palindrome(str) {
    const len = str.length, len1_2 = Math.floor(len/2);
    let isPalindrome = true;
    for(let ii = 0, jj = len-1; ii <= len1_2; ii++, jj--) {
        if(str[ii] != str[jj]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}

const palindromPipe = () => (source) =>
    new Rx.Observable(observer => {
        return source.subscribe({
            next(val) {
                observer.next(palindrome(val));
            },
            error(err) { observer.error(err); },
            complete() { observer.complete(); }
        })
    });

async function palindromeA(str) {
    let result = await Rx.Observable.of(str.split(''))
    .pipe(palindromPipe())
    .toPromise();

    return result;
}

module.exports.palindromeA = palindromeA;
module.exports.palindrome = palindrome;
