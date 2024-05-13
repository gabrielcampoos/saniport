import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import { Absoluta } from './components/Absoluta';
import { Appbar } from './components/Appbar';
import { Avatar } from './components/Avatar';
import { Saniport } from './components/Saniport';
import { Footer } from './components/Footer';

export const Inital = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<Box
						sx={{
							width: '100%',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Grid
							container
							spacing={{ xs: 0, sm: 0, md: 0 }}
							columns={{ xs: 12, sm: 12, md: 13 }}
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Appbar />

							<Box
								sx={{
									width: '100%',
									height: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									position: 'relative',
									background:
										'linear-gradient(to bottom, #D6D7D9 40%, #05194A 48%)',
								}}
							>
								<Saniport />

								<Avatar />

								<Absoluta />
							</Box>
							<Footer />
						</Grid>
					</Box>
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 0 }}
						columns={{ xs: 12, sm: 12, md: 13 }}
						sx={{
							width: '100%',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							background: '#DADBDD',
						}}
					>
						<Appbar />

						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								position: 'relative',
								top: -70,
							}}
						>
							<Saniport />

							<Avatar />

							<Absoluta />
						</Box>
					</Grid>
				</>
			)}
		</>
	);
};
