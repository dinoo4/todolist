const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
	login: async (req, res) => {
		try {
			const data = req.body;

			//if email not found
			const wrongEmail = await User.findOne({ email: data.email });
			if (!wrongEmail)
				return res.status(400).json({
					message: 'Email not found',
				});

			const user = await User.findOne({ email: data.email });
			const checkPwd = await bcrypt.compareSync(data.password, user.password);
			if (!checkPwd)
				return res.status(400).json({
					message: 'incorrect password',
				});

			const token = await jwt.sign({ email: data.email }, process.env.KEY);
			res.header('auth-token', token).json({
				message: 'success login',
				token,
			});
		} catch (error) {
			console.log(error);
		}
	},

	register: async (req, res) => {
		try {
			// hash password
			const data = req.body;
			const saltRounds = 10;
			const hash = bcrypt.hashSync(data.password, saltRounds);
			data.password = hash;

			// email exist
			const emailExist = await User.findOne({ email: data.email });
			if (emailExist)
				return res.status(400).json({
					message: 'Email already exist',
				});

			//register
			const user = new User(data);

			user.save();

			res.json({
				message: 'register success',
			});
		} catch (error) {
			console.log(error);
		}
	},
};
