import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

import connectDB from './config/connectDB.js';
import userRouter from './routes/userRoute.js';
import postRouter from './routes/postRoute.js';

const app = express();

//* midllewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRouter);
app.use('/posts', postRouter);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}...`.brightCyan.underline.bold);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
