import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import AbsolutaImg from '../../../../assets/images/absoluta.png';
import './styles.css';
import { AbsolutaSm } from './AbsolutaSm';
import { useNavigate } from 'react-router-dom';

export const Absoluta = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const navigate = useNavigate();

	return (
		<>
			{(smDown && (
				<>
					<AbsolutaSm />
				</>
			)) || (
				<>
					<Grid item xs={4} sm={4} md={4}>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
							}}
						>
							<Box
								className="absolutaExpand"
								component="img"
								src={AbsolutaImg}
								sx={{
									width: '30%',
									position: 'relative',
									zIndex: 2,
								}}
								onClick={() => navigate('/absoluta')}
							/>
						</Box>
					</Grid>
				</>
			)}
		</>
	);
};
