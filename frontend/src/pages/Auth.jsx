import { Button, FormLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendAuthRequest } from '../api/api';
import { authActions } from '../store';

const Auth = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [isSignup, setIsSignup] = useState(false);

	const onResReceived = (data) => {
		if (isSignup) {
			localStorage.setItem('userId', data.user._id);
		} else {
			localStorage.setItem('userId', data.id);
		}

		dispatch(authActions.login());
		navigate('/diaries');
	};

	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);

		if (isSignup) {
			sendAuthRequest(true, inputs)
				.then(onResReceived)
				.catch((error) => console.log(error));
		} else {
			sendAuthRequest(false, inputs)
				.then(onResReceived)
				.catch((error) => console.log(error));
		}
	};

	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<Box
			width={'40%'}
			borderRadius={5}
			boxShadow={'5px 5px 10px #ccc'}
			margin='auto'
			marginTop={8}
		>
			<form onSubmit={handleSubmit}>
				<Box
					display={'flex'}
					flexDirection={'column'}
					width='80%'
					padding={5}
					margin='auto'
				>
					<Typography
						padding={2}
						variant='h4'
						textAlign='center'
					>
						{isSignup ? 'Signup' : 'Login'}
					</Typography>

					{isSignup && (
						<>
							<FormLabel>Name</FormLabel>
							<TextField
								onChange={handleChange}
								value={inputs.name}
								name='name'
								margin='normal'
							/>
						</>
					)}

					<FormLabel>Email</FormLabel>
					<TextField
						onChange={handleChange}
						value={inputs.email}
						name='email'
						margin='normal'
					/>

					<FormLabel>Password</FormLabel>
					<TextField
						onChange={handleChange}
						value={inputs.password}
						name='password'
						margin='normal'
					/>

					<Button
						sx={{ mt: 2, borderRadius: 10 }}
						type='submit'
						variant='contained'
					>
						{isSignup ? 'Signup' : 'Login'}
					</Button>

					<Button
						onClick={() => setIsSignup(!isSignup)}
						sx={{ mt: 2, borderRadius: 10 }}
						variant='outlined'
					>
						Change to {isSignup ? 'Login' : 'Signup'}
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default Auth;

// * CONTINUE 3:08 MARK
