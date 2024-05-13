import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import BanheiroLuxoMasc1 from '../../../../../../assets/images/banheiro-luxo-masc-1.png';
import BanheiroLuxoMasc2 from '../../../../../../assets/images/banheiro-luxo-masc-2.png';
import BanheiroLuxoMasc3 from '../../../../../../assets/images/banheiro-luxo-mas-3.png';
import BanheiroLuxoFem1 from '../../../../../../assets/images/banheiro-luxo-fem-1.png';
import BanheiroLuxoFem2 from '../../../../../../assets/images/banheiro-luxo-fem-2.png';
import BanheiroLuxoFem3 from '../../../../../../assets/images/banheiro-luxo-fem-3.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		label: 'Container Banheiro',
		imgPath: `${BanheiroLuxoMasc1}`,
	},
	{
		label: 'Container Banheiro',
		imgPath: `${BanheiroLuxoMasc2}`,
	},
	{
		label: 'Container Banheiro',
		imgPath: `${BanheiroLuxoMasc3}`,
	},
	{
		label: 'Container Banheiro',
		imgPath: `${BanheiroLuxoFem1}`,
	},
	{
		label: 'Container Banheiro',
		imgPath: `${BanheiroLuxoFem2}`,
	},
	{
		label: 'Container Banheiro',
		imgPath: `${BanheiroLuxoFem3}`,
	},
];

function SliderBathromContainers() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	return (
		<Box sx={{ maxWidth: 400, flexGrow: 1 }}>
			<Paper
				square
				elevation={0}
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: 50,
					pl: 2,
					bgcolor: 'background.default',
				}}
			>
				<Typography
					sx={{
						fontWeight: 500,
					}}
				>
					{images[activeStep].label}
				</Typography>
			</Paper>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{images.map((step, index) => (
					<div key={step.label}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
								component="img"
								sx={{
									height: 255,
									display: 'block',
									maxWidth: 400,
									overflow: 'hidden',
									width: '100%',
								}}
								src={step.imgPath}
								alt={step.label}
							/>
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position="static"
				activeStep={activeStep}
				nextButton={
					<Button
						size="small"
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}
					>
						Next
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button
						size="small"
						onClick={handleBack}
						disabled={activeStep === 0}
					>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/>
		</Box>
	);
}

export default SliderBathromContainers;
