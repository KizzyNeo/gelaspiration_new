const bcrypt = require("bcryptjs");

async function hashPassword() {
    const hashed = await bcrypt.hash("Angela@1", 10);
    console.log(hashed);
}

hashPassword();