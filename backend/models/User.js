import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 4,
		},
		posts: [
			{
				type: mongoose.Types.ObjectId,
				ref: 'Post',
			},
		],
	},
	{ timestamps: true }
);

export default mongoose.model('User', userSchema);
