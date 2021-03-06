import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../../layout';
import PageTitle from '../../components/regularComponents/Title';
import CardSite from '../../components/regularComponents/CardSite';
import { container } from '../../utils/motion.variants';
import NewSite from '../../components/panels/NewSite';
import { useState } from 'react';
import { parseCookies } from 'nookies';
import { validateToken } from '../../utils/utils.open.api';

const sitesArray = [
	{ url: 'https://rodrigogarcia.com.mx', visits: 10, clicks: 5 },
	{ url: 'https://miaeromexico.com', visits: 15, clicks: 10 },
	{ url: 'https://plausible.io', visits: 200, clicks: 100 },
	{ url: 'https://umami.is', visits: 1500, clicks: 2500 }
];

export default function Dashboard({ test }) {
	const [addNew, setAddNew] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const filterOptions = (inputValue) => {
		sitesArray.filter((i) => {
			i.url.toLowerCase().includes(inputValue.toLowerCase());
		});
	};

	const loadOptions = (inputValue, callback) => {
		setTimeout(() => {
			callback(filterOptions(inputValue));
		}, 1000);
	};

	const handleInputChange = (newValue) => {
		const theInput = newValue.replace(/\W/g, '');
		setInputValue(theInput);
		return theInput;
	};

	return (
		<>
			<Head>
				<title>Sitios | Mapics</title>
			</Head>
			<PageTitle
				title="Mis sitios"
				has_button={true}
				add_button={true}
				event={() => setAddNew(true)}
			/>
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
			<AnimatePresence exitBeforeEnter>
				{addNew && <NewSite close={() => setAddNew(false)} />}
			</AnimatePresence>
		</>
	);
}

Dashboard.getLayout = (page) => {
	const { validToken } = page.props.children[1].props.children.props;
	return <Layout validToken={validToken}>{page}</Layout>;
};

// export async function getServerSideProps(ctx) {
// 	const cookie = parseCookies(ctx).mapics;
// 	const validToken = cookie ? await validateToken(cookie) : null;

// 	return {
// 		props: {
// 			validToken: validToken?.status === 200 ? true : false
// 		}
// 	};
// }
