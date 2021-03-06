import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../../layout';
import PageTitle from '../../components/regularComponents/Title';
import SiteTitle from '../../components/regularComponents/SiteTitle';
import SiteTitleData from '../../components/regularComponents/SiteTitleData';
import MainChart from '../../components/regularComponents/MainChart';
import WorldMapData from '../../components/regularComponents/WorldMapData';
import HorizontalDivider from '../../components/regularComponents/HorizontalDivider';
import { parseCookies } from 'nookies';
import { validateToken } from '../../utils/utils.open.api';

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
				<HorizontalDivider text="Vistas por país" color="black" />
				<WorldMapData />
			</motion.div>
		</>
	);
}

Site.getLayout = (page) => {
	const { validToken } = page.props.children[1].props.children.props;
	return <Layout validToken={validToken}>{page}</Layout>;
};

export async function getServerSideProps(ctx) {
	const cookie = parseCookies(ctx).mapics;
	const validToken = cookie ? await validateToken(cookie) : null;

	return {
		props: {
			// validToken: validToken?.status === 200 ? true : false
			validToken: true
		}
	};
}
