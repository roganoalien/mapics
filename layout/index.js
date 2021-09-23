import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import MainMenu from './MainMenu';
import MainFooter from './MainFooter';
import BigLoader from '../components/loaders/BigLoader';

export default function Layout({ children, validToken }) {
	const router = useRouter();
	const [loaderText, setLoaderText] = useState('Cargando');

	useEffect(async () => {
		if (!validToken) {
			setLoaderText('Acceso restringido. Redirigiendo a "/"');
			setTimeout(function () {
				router.push('/');
			}, 3000);
		}
	}, []);

	return validToken ? (
		<motion.main
			initial={{ opacity: 0 }}
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="bg-mBackground flex flex-col"
		>
			<MainMenu />
			<div className="w-full min-h-admin">
				<div className="container mx-auto px-10 md:px-20 2xl:px-10">
					{children}
				</div>
			</div>
			<MainFooter />
			<AnimatePresence exitBeforeEnter>
				{/* AQUI EL TOASTER */}
			</AnimatePresence>
		</motion.main>
	) : (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="h-screen w-screen bg-mBackground flex items-center justify-center"
		>
			<BigLoader text={loaderText} />;
		</motion.div>
	);
}
