import { AppBar, Toolbar, Tab, Tabs } from '@mui/material';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const linksArr = ['home', 'diaries', 'auth'];

const Header = () => {
	const [value, setValue] = useState(false);

	return (
		<AppBar sx={{ bgcolor: 'transparent', position: 'sticky' }}>
			<Toolbar>
				<ConnectingAirportsIcon
					sx={{ color: 'black' }}
					fontSize='large'
				/>
				<Tabs
					value={value}
					onChange={(e, val) => setValue(val)}
					sx={{ ml: 'auto', textDecoration: 'none' }}
				>
					{linksArr.map((link) => (
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
