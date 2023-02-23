import { Alert, Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Snackbar, Typography } from '@mui/material';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { deletePost } from '../api/api';

const DiaryItem = ({ title, description, image, location, date, id, user }) => {
	const [open, setOpen] = useState(false);

	const isLoggedInUser = () => {
		if (localStorage.getItem('userId') === user) {
			return true;
		}
		return false;
	};

	const handleDelete = () => {
		deletePost(id)
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
		setOpen(true);
	};

	return (
		<Card sx={{ width: '50%', height: '70vh', margin: 3, padding: 1, display: 'flex', flexDirection: 'column', boxShadow: '5px 5px 10px #ccc' }}>
			<CardHeader
				avatar={
					<Avatar
						sx={{ bgcolor: 'red' }}
						aria-label='recipe'
					>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<EditLocationAltIcon sx={{ color: 'purple', fontSize: '25px' }} />
					</IconButton>
				}
				title={location}
				subheader={date}
			/>
			<img
				height='250'
				src={image}
				alt={title}
			/>
			<CardContent>
				<Typography
					paddingBottom={1}
					variant='h6'
					color='text.secondary'
				>
					{title}
				</Typography>
				<hr />
				<Box
					paddingTop={1}
					display={'flex'}
				>
					<Typography
						width='170px'
						fontWeight={'bold'}
						variant='div'
					>
						John Doe:
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
					>
						{description}
					</Typography>
				</Box>
			</CardContent>

			{isLoggedInUser() && (
				<CardActions sx={{ ml: 'auto' }}>
					<IconButton
						LinkComponent={Link}
						to={`/post/${id}`}
						color='primary'
					>
						<EditIcon />
					</IconButton>
					<IconButton
						onClick={handleDelete}
						color='error'
					>
						<DeleteForeverIcon />
					</IconButton>
				</CardActions>
			)}
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={() => setOpen(false)}
			>
				<Alert
					onClose={() => setOpen(false)}
					severity='success'
					sx={{ width: '100%' }}
				>
					Post has been deleted!
				</Alert>
			</Snackbar>
		</Card>
	);
};
export default DiaryItem;
