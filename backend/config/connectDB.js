import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		mongoose.set('strictQuery', true);
		const connect = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected...`.brightCyan.underline.bold);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export default connectDB;
