const {validatePassword} = require('./passwordValidator');

describe('Password Validator', () => {

    test('Valid : the password has 8 or more characters', () => {
        expect(validatePassword('1aaabbbbcccc')).toBe(true);
    })

    test('Valid : the password has exactly 8 characters', () => {
        expect(validatePassword('1aaabbbb')).toBe(true);
    })

    test('Invalid : the password has less than 8 characters', () => {
        expect(validatePassword('1aaa')).toBe(false);
    })

    test('valid : the password has digits', () => {
        expect(validatePassword('1aaabbbb')).toBe(true);
    })

    test('invalid : the password has no digits', () => {
        expect(validatePassword('aaaabbbb')).toBe(false);
    })

})