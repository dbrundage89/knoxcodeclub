module.exports = function isPalindrome(string){
    // return true or false if a string is
    // a Palindrome, ingnore case
    const initial = string.toLowerCase()
    const reverse = initial.split('').reverse().join('')
    
    return reverse === initial
}