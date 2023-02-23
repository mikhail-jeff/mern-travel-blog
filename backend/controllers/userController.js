import bcrypt, { compareSync } from 'bcrypt';
import User from '../models/User.js';

// * GET ALL USERS
export const getAllUsers = async (req, res) => {
	let users;

	try {
		users = await User.find();
	} catch (error) {
		console.log(error);
	}

	if (!users) {
		return res.status(500).json({
			message: 'Unexpected error occured.',
		});
	} else {
		return res.status(200).json({ users });
	}
};

// * SIGNUP
export const signup = async (req, res, next) => {
	const { name, email, password } = req.body;

	if (!name && name.trim() === '' && !email && email.trim() === '' && !password && password.length < 4) {
		return res.status(422).json({
			message: 'Invalid Data.',
		});
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	let user;
	try {
		user = new User({ email, name, password: hashedPassword });
		await user.save();
	} catch (error) {
		console.log(error);
	}

	if (!user) {
		return res.status(500).json({
			message: 'Unexpected Error Occured',
		});
	}
	return res.status(201).json({ user });
};

// * LOGIN
export const login = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email && email.trim() === '' && !password && password.length < 4) {
		return res.status(422).json({
			message: 'Invalid Data.',
		});
	}

	let existingUser;

	try {
		existingUser = await User.findOne({ email });
	} catch (error) {
		console.log(error);
	}

	if (!existingUser) {
		return res.status(404).json({
			message: 'No User Found!',
		});
	}

	const isPasswordCorrect = compareSync(password, existingUser.password);

	if (!isPasswordCorrect) {
		return res.status(400).json({
			message: 'Incorrect Password!',
		});
	}

	return res.status(200).json({
		id: existingUser._id,
		email,
		message: 'Login Successful!',
	});
};

// * GET USER BY ID
export const getUserById = async (req, res) => {
	const id = req.params.id;

	let user;
	try {
		user = await User.findById(id).populate('posts');
	} catch (error) {
		return console.log(error);
	}

	if (!user) {
		return res.status(404).json({
			message: 'No User Found!',
		});
	}
	return res.status(200).json({ user });
};
