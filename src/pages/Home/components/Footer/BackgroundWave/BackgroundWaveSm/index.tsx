import { Box } from '@mui/material';

export const BackgroundWaveSm = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '80px',
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 1440 320">
				<path
					fill="#182957"
					fillOpacity="1"
					d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,208C840,235,960,245,1080,240C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
				></path>
			</svg>
		</Box>
	);
};
