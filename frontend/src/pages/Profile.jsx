import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserDetails } from '../api/api';
import DiaryItem from '../components/DiaryItem';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [user, setUser] = useState();

	useEffect(() => {
		getUserDetails()
			.then((data) => setUser(data.user))
			.catch((error) => console.log(error));
	}, []);

	const handleClick = () => {
		dispatch(authActions.logout());
		localStorage.removeItem('userId');
		navigate('/');
	};

	return (
		<Box
			display='flex'
			flexDirection={'column'}
		>
			{user && (
				<>
					<Typography
						textAlign={'center'}
						variant='h4'
						fontFamily={'Quicksand'}
						padding={2}
					>
						User Profile
					</Typography>
					<Typography
						fontFamily={'Quicksand'}
						paddingLeft={2}
						textAlign='left'
					>
						Name: {user.name}
					</Typography>
					<Typography
						fontFamily={'Quicksand'}
						paddingLeft={2}
						textAlign='left'
					>
						Email: {user.email}
					</Typography>
					<Button
						onClick={handleClick}
						sx={{ mr: 'auto', ml: 2, mt: 1 }}
						color='error'
						variant='contained'
					>
						Logout
					</Button>
					<Box
						display={'flex'}
						flexDirection={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						marginTop={2}
					>
						{user.posts.map((post, index) => (
							<DiaryItem
								key={index}
								title={post.title}
								description={post.description}
								date={post.date}
								location={post.location}
								id={post.id}
								image={post.image}
								user={user.id}
							/>
						))}
					</Box>
				</>
			)}
		</Box>
	);
};
export default Profile;
