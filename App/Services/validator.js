import validator from 'validator'

export const checkEmaill = (email) => {
    if (validator.isEmail(email)) return true
    return false
}