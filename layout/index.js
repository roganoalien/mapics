import { motion } from 'framer-motion';
import MainMenu from './MainMenu';

export default function Layout({ children }) {
	return (
		<motion.main className="bg-mBackground">
			<MainMenu />
			<div className="w-full min-h-admin">
				<div className="container mx-auto px-10 md:px-20 2xl:px-10">
					{children}
				</div>
			</div>
		</motion.main>
	);
}
