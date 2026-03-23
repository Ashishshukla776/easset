const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRepo = require("../repositories/userRepository");

exports.register = async (data) => {
    const hashed = await bcrypt.hash(data.password, 10);

    return userRepo.createUser({
        ...data,
        password: hashed
    });
};

exports.login = async (email, password) => {
    const user = await userRepo.findByEmail(email);

    if (!user) throw new Error("User not found");

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) throw new Error("Invalid password");

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET
    );

    return { user, token };
};