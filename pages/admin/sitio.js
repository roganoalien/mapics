import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../../layout';
import PageTitle from '../../components/regularComponents/Title';
import SiteTitle from '../../components/regularComponents/SiteTitle';
import SiteTitleData from '../../components/regularComponents/SiteTitleData';
import MainChart from '../../components/regularComponents/MainChart';
import WorldMapData from '../../components/regularComponents/WorldMapData';

export default function Site() {
	return (
		<>
			<Head>
				<title>NOMBRE SITIO | Mapics</title>
			</Head>
			<PageTitle
				title="Detalle"
				the_span="rodrigogarcia.com.mx"
				has_span={true}
				has_button={true}
				other_buttons={true}
			/>
			<motion.div
				initial={{ opacity: 0, y: -25 }}
				animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
				exit={{ opacity: 0, y: 25 }}
				className="w-full bg-white shadow-regular rounded-md flex items-start justify-center flex-wrap py-12 px-20"
			>
				<SiteTitle site="https://rodrigogarcia.com.mx" />
				<SiteTitleData />
				<MainChart />
				<WorldMapData />
			</motion.div>
		</>
	);
}

Site.getLayout = (page) => <Layout>{page}</Layout>;
