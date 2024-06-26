/**
 * counts x to the power of n
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
function pow(x, n){return x**n}


/**
 * counts sum of numbers up to n
 * @param {number} n 
 * @returns {number}
 */
function sumTo(n){
    let s = 0
    for (let i=0; i<=n; i++) s+=i
    return s
}


/**
 * checks if the year is leap
 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year){return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)}


/**
 * counts n factorial
 * @param {number} n 
 * @returns {bigint}
 */
function factorial(n){
    if (n == 0) return BigInt(1)
    if (n == 1) return BigInt(1)
    if (n >= 2) return BigInt(n) * BigInt(factorial(n - 1));
}


/**
 * counts nth fib number
 * @param {number} n 
 * @returns {bigint}
 */
function fib(n){
    if (!n) return BigInt(0)
    let a = BigInt(1)
    let b = BigInt(1)
    for (let i = 3; i <= n; i++) {
      let c = a + b
      a = b
      b = c
    }
    return b
}

/**
 * checks if y is more than x
 * if equal returns null
 * @param {number} x
 * @param {number} y
 * @returns
 */
function compare(x){return function(y){return y==x ? null : y>x}}


/**
 * conts sum of given numbers
 * @param  {...number} args 
 * @returns {number}
 */
function sum(...args){
    let s = 0
    for(let i of args) s+=i
    return s
}