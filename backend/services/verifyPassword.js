import bcrypt from "bcrypt"

async function verifyPassword(password , hashPassword) {
    const verify = await bcrypt.compare(password , hashPassword)
    return verify
}

export default verifyPassword;