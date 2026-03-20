const authService = require("../services/authService");

exports.register = async (req, res) => {
    const user = await authService.register(req.body);
    res.json(user);
};

exports.login = async (req, res) => {
    const result = await authService.login(
        req.body.email,
        req.body.password
    );

    res.json(result);
};