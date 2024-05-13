/* eslint-disable import-helpers/order-imports */
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import SaniportImg from '../../../../assets/images/logo.png';
import './styles.css';
import { SaniportSm } from './SaniportSm';

import { useNavigate } from 'react-router-dom';

export const Saniport = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const navigate = useNavigate();

	return (
		<>
			{(smDown && (
				<>
					<SaniportSm />
				</>
			)) || (
				<>
					<Grid item xs={4} sm={4} md={4}>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'flex-end',
								alignItems: 'center',
							}}
						>
							<Box
								className="saniportExpand"
								component="img"
								src={SaniportImg}
								sx={{
									width: '30%',
									position: 'relative',
									zIndex: 2,
								}}
								onClick={() => navigate('/saniport')}
							/>
						</Box>
					</Grid>
				</>
			)}
		</>
	);
};
