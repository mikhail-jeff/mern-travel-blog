import axios from 'axios';

// * GET ALL POSTS
export const getAllPosts = async () => {
	const res = await axios.get('/posts');

	if (res.status !== 200) {
		return console.log('Some Error Occurred');
	}

	const data = res.data;
	return data;
};

// * LOGIN/SIGNUP
export const sendAuthRequest = async (signup, data) => {
	const res = await axios
		.post(`/user/${signup ? 'signup' : 'login'}/`, {
			name: data.name ? data.name : '',
			email: data.email,
			password: data.password,
		})
		.catch((error) => console.log(error));

	if (res.status !== 200 && res.status !== 201) {
		return console.log('Unable to Authenticate.');
	}

	const resData = await res.data;
	return resData;
};

// * ADD POST
export const addPost = async (data) => {
	const res = await axios
		.post('/posts', {
			title: data.title,
			description: data.description,
			location: data.location,
			image: data.imageUrl,
			date: data.date,
			user: localStorage.getItem('userId'),
		})
		.catch((error) => console.log(error));

	if (res.status !== 201) {
		return console.log('Error Occurred');
	}

	const resData = await res.data;
	return resData;
};

// * GET POST DETAILS
export const getPostDetails = async (id) => {
	const res = await axios.get(`/posts/${id}`).catch((error) => console.log(error));

	if (res.status !== 200) {
		return console.log('Unable to fetch data');
	}

	const resData = await res.data;
	return resData;
};

// * UPDATE POST
export const updatePost = async (data, id) => {
	const res = await axios
		.put(`/posts/${id}`, {
			title: data.title,
			description: data.description,
			location: data.location,
			image: data.imageUrl,
		})
		.catch((error) => {
			console.log(error);
		});

	if (res.status !== 200) {
		return console.log('Unable to update');
	}

	const resData = await res.data;
	return resData;
};

// * DELETE POST
export const deletePost = async (id) => {
	const res = await axios.delete(`/posts/${id}`).catch((error) => console.log(error));

	if (res.status !== 200) {
		return console.log('Unable to delete');
	}

	const resData = await res.data;
	return resData;
};

// * GET USER DETAILS
export const getUserDetails = async () => {
	const id = localStorage.getItem('userId');
	const res = await axios.get(`/user/${id}`).catch((error) => console.log(error));

	if (res.status !== 200) {
		return console.log('No User Found');
	}

	const resData = await res.data;
	return resData;
};
