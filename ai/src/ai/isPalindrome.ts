/**
 * 判断回文数字优化方案
 * @param x 数字
 * @returns 是否回文数
 */
export function isPalindrome(x: number):boolean {
    if (x < 0 || (x / 10 === 0 && x !== 0)) return false;
    let y = 0;
    while (y < x) {
        y = y*10 + x%10;
        x = Math.floor(x / 10);
    }
    return x === y || Math.floor(y / 10) === x;
}