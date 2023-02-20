import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Box
			position={'relative'}
			width='100%'
			height='90vh'
		>
			<img
				src='/travel.jpg'
				alt='plane'
				width='100%'
				height='80%'
			/>
			<Typography
				fontFamily={'Quicksand, sans-serif'}
				variant='h3'
				fontWeight='bold'
				textAlign='center'
				width='100%'
				sx={{
					position: 'absolute',
					top: '0px',
					background: 'transparent',
					color: '#111',
					paddingTop: '8px',
				}}
			>
				“Work. Travel. Save. Repeat.”
			</Typography>
			<Box
				width='100%'
				height='20%'
				display={'flex'}
				flexDirection='column'
			>
				<Typography
					fontFamily={'Quicksand'}
					textAlign={'center'}
					variant='h4'
					padding={2}
				>
					Share Your Travel Diaries With Us
				</Typography>
				<Box margin='auto'>
					<Button
						variant='outlined'
						sx={{ mr: 2 }}
					>
						Share Your Story
					</Button>
					<Button
						LinkComponent={Link}
						to='/diaries'
						variant='contained'
						sx={{ ml: 2 }}
					>
						View Diaries
					</Button>
				</Box>
			</Box>
		</Box>
	);
};
export default Home;

// * continue 2:08
