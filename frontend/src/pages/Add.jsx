import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { addPost } from '../api/api';

const Add = () => {
	const [inputs, setInputs] = useState({
		title: '',
		description: '',
		location: '',
		imageUrl: '',
		date: '',
	});

	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addPost(inputs)
			.then((res) => console.log(res))
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

					<FormLabel>Date</FormLabel>
					<TextField
						onChange={handleChange}
						name='date'
						value={inputs.date}
						margin='normal'
						type='date'
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
		</Box>
	);
};
export default Add;
