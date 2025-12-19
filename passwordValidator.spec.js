const {validatePassword} = require('./passwordValidator');

describe('Password Validator', () => {

      test('Valid : the password has 8 or more characters', () => {
        expect(validatePassword('aaaabbbbcccc')).toBe(true);
      })

      test('Valid : the password has exactly 8 characters', () => {
        expect(validatePassword('aaaabbbb')).toBe(true);
      })

      test('Invalid : the password has less than 8 characters', () => {
        expect(validatePassword('aaaa')).toBe(false);
      })
})