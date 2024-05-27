import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['Solicitar Retirada'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Appbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null,
	);

	const navigate = useNavigate();

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position="static"
			sx={{
				background: '#fff',
			}}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						sx={{
							flex: 10,
							display: { xs: 'flex', md: 'flex' },
						}}
					>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none', zIndex: 2 },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box
						sx={{
							display: { xs: 'none', md: 'flex', zIndex: 2 },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={() => {
									handleCloseNavMenu;
									navigate('/saniport');
								}}
								variant="contained"
								sx={{
									my: 2,
									color: '#fff',
									background: '#2D3091',
									display: 'block',
									fontWeight: 700,
									fontSize: '1.2rem',
									letterSpacing: '.2rem',
								}}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 1 }}>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem
									key={setting}
									onClick={handleCloseUserMenu}
								>
									<Typography textAlign="center">
										{setting}
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
