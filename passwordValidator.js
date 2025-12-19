function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    
    let hasDigit = false;
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= '0' && char <= '9') {
            hasDigit = true;
            break;
        }
    }

    return hasMinLength && hasDigit;
}



module.exports = {validatePassword}