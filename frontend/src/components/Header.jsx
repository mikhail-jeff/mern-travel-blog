import { AppBar, Toolbar, Tab, Tabs } from '@mui/material';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const linksArr = ['home', 'diaries', 'auth'];
const loggedInLinks = ['home', 'diaries', 'add', 'profile'];

const Header = () => {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	const [value, setValue] = useState(false);

	return (
		<AppBar sx={{ bgcolor: 'transparent', position: 'sticky' }}>
			<Toolbar>
				<ConnectingAirportsIcon
					sx={{ color: 'blue' }}
					fontSize='large'
				/>
				<Tabs
					value={value}
					onChange={(e, val) => setValue(val)}
					sx={{ ml: 'auto', textDecoration: 'none' }}
				>
					{isLoggedIn
						? loggedInLinks.map((link) => (
								<Tab
									LinkComponent={Link}
									to={`/${link === 'home' ? '' : link}`}
									sx={{
										textDecoration: 'none',
										fontWeight: 'bold',
										// ':hover': {
										// 	textDecoration: 'underline',
										// 	textUnderlineOffset: '18px',
										// },
									}}
									key={link}
									label={link}
								/>
						  ))
						: linksArr.map((link) => (
								<Tab
									LinkComponent={Link}
									to={`/${link === 'home' ? '' : link}`}
									sx={{
										textDecoration: 'none',
										fontWeight: 'bold',
										// ':hover': {
										// 	textDecoration: 'underline',
										// 	textUnderlineOffset: '18px',
										// },
									}}
									key={link}
									label={link}
								/>
						  ))}
				</Tabs>
			</Toolbar>
		</AppBar>
	);
};
export default Header;
