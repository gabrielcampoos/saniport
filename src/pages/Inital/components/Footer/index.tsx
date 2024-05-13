import { Box, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
	return (
		<Box
			sx={{
				width: '100%',
				position: 'relative',
				top: -300,
			}}
		>
			<Grid
				container
				spacing={{ xs: 2, sm: 2, md: 4 }}
				columns={{ xs: 12, sm: 12, md: 12 }}
				sx={{
					width: '100%',
					height: '100%',
					background: '#04194a',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					gap: 3,
				}}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '25px',
							color: '#fff',
						}}
					>
						Nos siga nas redes sociais
					</Typography>
				</Grid>

				<Grid
					item
					xs={6}
					sm={6}
					md={6}
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
					}}
				>
					<IconButton>
						<FacebookIcon color="primary" fontSize="large" />
					</IconButton>

					<IconButton>
						<InstagramIcon color="error" fontSize="large" />
					</IconButton>
				</Grid>
			</Grid>
		</Box>
	);
};
