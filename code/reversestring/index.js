var Rx = require('rxjs/Rx');

function reverse(str) {
    // solution 1
    //return str.split('').reverse().join('');
    
    //solution 2
    /*const len = str.length;
    let newStr = '';
    for (let ii = len - 1; ii >= 0; ii--) {
        newStr += str[ii];        
    }
    return newStr;*/

    //solution 3
    /*var returnVal = '';
    for (const currChar of str) {
        returnVal = currChar + returnVal
    }
    return returnVal;*/

    //solution 4    
    return str.split('').reduce((c, s) => s + c, '');
}

const reversePipe = () => (source) =>
    new Rx.Observable(observer => {
        return source.subscribe({
            next(val) {
                observer.next(reverse(val));
            },
            error(err) { observer.error(err); },
            complete() { observer.complete(); }
        })
    });

async function reverseA(str) {
    // solution 5
    const result = await Rx.Observable.of(str)
    .pipe(reversePipe())
    .toPromise();
    return result;
}

module.exports = {reverse, reverseA, reversePipe};
