import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../../layout';

export default function Dashboard() {
	return (
		<>
			<Head>
				<title>Mapics | Sitios</title>
			</Head>
			<div className="page-title w-full lg:w-10/12 mx-auto flex items-center justify-start mt-14">
				<h1 className="font-bold text-mBlack text-2xl pr-3 whitespace-nowrap">
					Mis sitios
				</h1>
				<div className="h-[2px] translate-x-1 bg-mGrayBorder w-full rounded-full"></div>
			</div>
		</>
	);
}

Dashboard.getLayout = (page) => <Layout>{page}</Layout>;
