/**
 *
 * @param x
 * @returns
 */
function isPalindrome(x) {
    if (x < 0)
        return false;
    var y = x;
    var z = 0;
    while (y !== 0) {
        z = y % 10 + z * 10;
        y = Math.floor(y / 10);
    }
    return x === z;
}
/**
 *
 * @param x
 * @returns boolean
 */
function isPalindrome2(x) {
    if (x < 0 || (x / 10 === 0 && x !== 0))
        return false;
    var y = 0;
    while (y < x) {
        y = y * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === y || Math.floor(y / 10) === x;
}
const result = isPalindrome(123454321)
const result2 = isPalindrome2(123454321)
console.log(result)
console.log(result2)
