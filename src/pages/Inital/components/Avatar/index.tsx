import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import AvatarImg from '../../../../assets/images/avatar.png';
import { AvatarSm } from './AvatarSm';

export const Avatar = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<AvatarSm />
				</>
			)) || (
				<>
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
							alignItems: 'center',
						}}
					>
						<Box
							component="img"
							src={AvatarImg}
							sx={{
								position: 'absolute',
								height: '100%',
								zIndex: 1,
							}}
						/>
					</Grid>
				</>
			)}
		</>
	);
};
