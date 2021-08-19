import { motion } from 'framer-motion';
import PageTitle from './Title';
import MainMenu from './MainMenu';
import MainFooter from './MainFooter';

export default function Layout({ children }) {
	return (
		<motion.main className="bg-mBackground flex flex-col">
			<MainMenu />
			<div className="w-full min-h-admin">
				<div className="container mx-auto px-10 md:px-20 2xl:px-10">
					<PageTitle title="Mis sitios" has_button={true} />
					{children}
				</div>
			</div>
			<MainFooter />
		</motion.main>
	);
}
