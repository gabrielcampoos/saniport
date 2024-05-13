import { Box, Grid } from '@mui/material';

import AvatarImg from '../../../../../assets/images/avatar.png';

export const AvatarSm = () => {
	return (
		<Grid
			item
			xs={4}
			sm={4}
			md={4}
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-start',
			}}
		>
			<Box
				component="img"
				src={AvatarImg}
				sx={{
					position: 'absolute',
					width: '100%',
					zIndex: 1,
				}}
			/>
		</Grid>
	);
};
