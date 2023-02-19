import Post from '../models/Post.js';
import User from '../models/User.js';
import mongoose from 'mongoose';

// * GET ALL POSTS
export const getAllPosts = async (req, res) => {
	let posts;

	try {
		posts = await Post.find();
	} catch (error) {
		console.log(error);
	}

	if (!posts) {
		return res.status(500).json({
			message: 'Unexpected error occured.',
		});
	} else {
		return res.status(200).json({ posts });
	}
};

// * ADD POST
export const addPost = async (req, res) => {
	const { title, description, location, date, image, user } = req.body;

	if (!title && title.trim() === '' && !description && description.trim() === '' && !location && location.trim() === '' && !date && !user && !image && image.trim() === '') {
		return res.status(422).json({
			message: 'Invalid Data!',
		});
	}

	let existingUser;
	try {
		existingUser = await User.findById(user);
	} catch (error) {
		console.log(error);
	}

	if (!user) {
		return res.status(404).json({
			message: 'User Not Found!',
		});
	}

	let post;
	try {
		post = new Post({
			title,
			description,
			image,
			location,
			date: new Date(`${date}`),
			user,
		});

		const session = await mongoose.startSession();

		session.startTransaction();

		existingUser.posts.push(post);

		await existingUser.save({ session });

		post = await post.save({ session });

		await session.commitTransaction();
	} catch (error) {
		console.log(error);
	}

	if (!post) {
		return res.status(500).json({
			message: 'Unexpected Error Occured',
		});
	}
	return res.status(201).json({ post });
};

// * GET POST BY ID
export const getPostById = async (req, res) => {
	const id = req.params.id;

	let post;

	try {
		post = await Post.findById(id);
	} catch (error) {
		console.log(error);
	}

	if (!post) {
		return res.status(404).json({
			message: 'No Post Found!',
		});
	}
	return res.status(200).json({ post });
};

// * UPDATE POST
export const updatePost = async (req, res) => {
	const { title, description, location, date, image } = req.body;

	const id = req.params.id;

	if (!title && title.trim() === '' && !description && description.trim() === '' && !location && location.trim() === '' && !date && !image && image.trim() === '') {
		return res.status(422).json({
			message: 'Invalid Data!',
		});
	}

	let post;

	try {
		post = await Post.findByIdAndUpdate(id, {
			title,
			description,
			image,
			date: new Date(`${date}`),
			location,
		});
	} catch (error) {
		console.log(error);
	}

	if (!post) {
		return res.status(500).json({
			message: 'Unable to update!',
		});
	}
	return res.status(200).json({
		message: 'Updated Successfully!',
	});
};

// * DELETE POST
export const deletePost = async (req, res) => {
	const id = req.params.id;

	let post;

	try {
		const session = await mongoose.startSession();
		session.startTransaction();

		post = await Post.findById(id).populate('user');
		post.user.posts.pull(post);
		await post.user.save({ session });

		post = await Post.findByIdAndRemove(id);

		await session.commitTransaction();
	} catch (error) {
		console.log(error);
	}

	if (!post) {
		return res.status(500).json({
			message: 'Unable to Delete!',
		});
	}
	return res.status(200).json({
		message: 'Deleted Successfully!',
	});
};
