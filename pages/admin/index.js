import { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../../layout';
import PageTitle from '../../components/regularComponents/Title';
import CardSite from '../../components/regularComponents/CardSite';
import { container } from '../../utils/motion.variants';

const sitesArray = [
	{ url: 'https://rodrigogarcia.com.mx', visits: 10, clicks: 5 },
	{ url: 'https://miaeromexico.com', visits: 15, clicks: 10 },
	{ url: 'https://plausible.io', visits: 200, clicks: 100 },
	{ url: 'https://umami.is', visits: 1500, clicks: 2500 }
];

export default function Dashboard() {
	return (
		<>
			<Head>
				<title>Sitios | Mapics</title>
			</Head>
			<PageTitle title="Mis sitios" has_button={true} add_button={true} />
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				exit="hidden"
				className="w-full min-h-10 grid grid-cols-4 gap-5"
			>
				{sitesArray.map((site, index) => (
					<CardSite
						key={site + index}
						favicon={`${site.url}/favicon.ico`}
						site={site.url}
						visits={10}
						clicks={30}
						delay={index}
					/>
				))}
			</motion.div>
		</>
	);
}

Dashboard.getLayout = (page) => <Layout>{page}</Layout>;
