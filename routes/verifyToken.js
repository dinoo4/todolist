const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next) => {
	const token = req.header('auth-token');
	if (!token) return;
	res.status(400).json({
		message: 'Access Denied',
	});

	try {
		const verified = jwt.verify(token, process.env.KEY);
		req.user = verified.email;
		next();
	} catch (err) {
		res.status(400).json({
			message: 'invalid token',
		});
	}
};

module.exports = verifyToken;
