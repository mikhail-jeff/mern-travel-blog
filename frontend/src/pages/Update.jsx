import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetails, updatePost } from '../api/api';

const Update = () => {
	const [post, setPost] = useState();

	const [inputs, setInputs] = useState({
		title: '',
		description: '',
		location: '',
		imageUrl: '',
		date: '',
	});

	const id = useParams().id;
	console.log(id);

	useEffect(() => {
		getPostDetails(id)
			.then((data) => {
				setPost(data.post);

				setInputs({
					title: data.post.title,
					description: data.post.description,
					location: data.post.location,
					imageUrl: data.post.image,
				});
			})
			.catch((error) => console.log(error));
	}, [id]);

	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		updatePost(inputs, id)
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			width='100%'
			height='100%'
		>
			<Typography
				margin={'auto'}
				variant='h4'
				fontFamily={'Quicksand'}
				marginTop={2}
				fontWeight='bold'
			>
				Add Your Travel Diary
			</Typography>

			{post && (
				<form onSubmit={handleSubmit}>
					<Box
						width={'60%'}
						padding={3}
						display={'flex'}
						margin='auto'
						flexDirection={'column'}
					>
						<FormLabel>Title</FormLabel>
						<TextField
							onChange={handleChange}
							name='title'
							value={inputs.title}
							margin='normal'
							required
						/>

						<FormLabel>Description</FormLabel>
						<TextField
							onChange={handleChange}
							name='description'
							value={inputs.description}
							margin='normal'
							required
						/>

						<FormLabel>Image URL</FormLabel>
						<TextField
							onChange={handleChange}
							name='imageUrl'
							value={inputs.imageUrl}
							margin='normal'
							required
						/>

						<FormLabel>Location</FormLabel>
						<TextField
							onChange={handleChange}
							name='location'
							value={inputs.location}
							margin='normal'
							required
						/>

						<Button
							type='submit'
							variant='contained'
							sx={{ mt: 2, borderRadius: 7 }}
						>
							Post
						</Button>
					</Box>
				</form>
			)}
		</Box>
	);
};
export default Update;
