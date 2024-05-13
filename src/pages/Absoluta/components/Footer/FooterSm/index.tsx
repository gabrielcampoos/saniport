import { Box, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const FooterSm = () => {
	return (
		<Box
			component="footer"
			sx={{
				width: '100%',
				background: '#122D46',
			}}
		>
			<Grid
				container
				spacing={{ xs: 2, sm: 2, md: 4 }}
				columns={{ xs: 12, sm: 12, md: 12 }}
				sx={{
					width: '100%',
					height: '100%',
				}}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Typography
						sx={{
							color: '#fff',
							fontSize: '18px',
							fontWeight: 700,
						}}
					>
						Nos siga nas redes sociais
					</Typography>

					<Box
						sx={{
							width: '100%',
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<IconButton>
							<FacebookIcon color="primary" fontSize="large" />
						</IconButton>

						<IconButton>
							<InstagramIcon color="error" fontSize="large" />
						</IconButton>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
