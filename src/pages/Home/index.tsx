import { Box, Typography } from '@mui/material';

import { Appbar } from './components/Appbar';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import FloatingActionButtonSize from './components/Section/FloatingButton';
import { useEffect, useState } from 'react';
import { ModalSignUpUser } from './components/ModalSignUpUser';

export const Home = () => {
	const [isOpen, setOpen] = useState(true);

	const userLogged = localStorage.getItem('userLogged');

	useEffect(() => {}, [userLogged]);

	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
			}}
		>
			{(!userLogged && (
				<>
					<ModalSignUpUser
						openModalSignUp={isOpen}
						changeOpenModalSignUp={setOpen}
					/>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							opacity: 1,
							zIndex: 2,
							position: 'absolute',
						}}
					>
						<FloatingActionButtonSize />
					</Box>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							opacity: 0.3,
							position: 'relative',
							zIndex: 1,
						}}
					>
						<Appbar />
						<Section />
						<Footer />
					</Box>
				</>
			)) || (
				<>
					<Appbar />
					<Section />
					<Footer />
					<FloatingActionButtonSize />
				</>
			)}
		</Box>
	);
};
