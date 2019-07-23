const isPalindrome = require('../index.js')

describe('isPalindrome', () => {
    it('returns true if a palindrome', () => {
        const value = isPalindrome('racecar')
        expect(value).toBe(true)
    })
    it('returns false if not palindrome', () => {
        const value = isPalindrome('javascript')
        expect(value).toBe(false)
    })
    it('returns true if a palindrome case insensitive', () => {
        const value = isPalindrome('Racecar')
        expect(value).toBe(true)
    })
})