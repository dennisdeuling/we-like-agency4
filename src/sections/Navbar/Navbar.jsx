import React from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Button,
	MenuItem,
	Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../assets/images/Logo.jpg';

const pages = ['welikeagency', 'Vorteile', 'Leistung', 'Kundenmeinung', 'Projekte', 'Kontakt'];

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Avatar
						variant="square"
						sx={{ height: '80px', width: '200px', marginTop: '10px' }}
						src={Logo}
					/>
					<Box
						sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}
					>
						{pages.map(page => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							justifyContent: 'flex-end',
							color: 'white',
							display: { xs: 'flex', md: 'none' }
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}
						>
							{pages.map(page => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
									style={{ justifyContent: 'center' }}
								>
									<Typography
										component="a"
										textAlign="center"
										href={`#${page.toLowerCase()}`}
										sx={{ textDecoration: 'none', color: 'black' }}
									>
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
