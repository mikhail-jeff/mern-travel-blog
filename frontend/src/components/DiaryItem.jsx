import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box } from '@mui/system';

const DiaryItem = ({ title, description, image, location, date, id }) => {
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
			<CardActions sx={{ ml: 'auto' }}>
				<IconButton color='primary'>
					<EditIcon />
				</IconButton>
				<IconButton color='error'>
					<DeleteForeverIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};
export default DiaryItem;

// * CONINUE 1:28
