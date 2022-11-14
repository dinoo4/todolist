const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next) => {
	const authHeader = req.get('Authorization');
	let token = '';

	if (authHeader && authHeader.startsWith('Bearer'))
		token = authHeader.split(' ')[1];
	else
		return res.status(401).send({
			status: false,
			message: 'enter the token first',
			data: null,
		});

	try {
		const verified = jwt.verify(token, process.env.KEY);
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).json({
			message: 'invalid token',
		});
	}
};

module.exports = { verifyToken };
