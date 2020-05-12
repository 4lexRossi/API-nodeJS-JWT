import jwt from 'jsonwebtoken'

import config from '../config'

const generateToken = (payload) => {
    return jwt.sign(payload, config.privateKey, config.authOptions)
}
const generateToken1 = (payload1) => {
    return jwt.sign(payload1, config.privateKey, config.authOptions)
}

export {
    generateToken,
    generateToken1
}