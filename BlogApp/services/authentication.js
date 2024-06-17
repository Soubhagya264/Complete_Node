const JWT = require("jsonwebtoken");
const secret = "$oubhagya"
function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        profilePicture: user.profilePicture,
        role: user.role
    };
    return JWT.sign(payload, secret, { expiresIn: "5h" });
}

function validateToken(token) {
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken,
};