import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../api/api';
import DiaryItem from '../components/DiaryItem';

const Diaries = () => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		getAllPosts()
			.then((data) => setPosts(data?.posts))
			.catch((error) => console.log(error));
	}, []);

	return (
		<Box
			display='flex'
			flexDirection={'column'}
			padding={3}
			justifyContent='center'
			alignItems={'center'}
		>
			{posts &&
				posts.map((item, index) => (
					<DiaryItem
						date={new Date(`${item.date}`).toLocaleDateString()}
						description={item.description}
						image={item.image}
						id={item._id}
						location={item.location}
						title={item.title}
						key={index}
					/>
				))}
		</Box>
	);
};
export default Diaries;
