import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../../layout';
import CardSite from '../../components/regularComponents/CardSite';

export default function Dashboard() {
	return (
		<>
			<Head>
				<title>Sitios | Mapics</title>
			</Head>
			<div className="w-full min-h-10 grid grid-cols-4 gap-5">
				<CardSite
					favicon="https://rodrigogarcia.com.mx/favicon.ico"
					site="rodrigogarcia.com.mx"
					visits={10}
					clicks={30}
				/>
				<CardSite
					favicon="https://rodrigogarcia.com.mx/favicon.ico"
					site="rodrigogarcia.com.mx"
					visits={10}
					clicks={30}
				/>
			</div>
		</>
	);
}

Dashboard.getLayout = (page) => <Layout>{page}</Layout>;
