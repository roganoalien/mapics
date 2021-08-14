import Router from 'next/router';
import NProgress from 'nprogress';
import { AnimatePresence } from 'framer-motion';
import 'nprogress/nprogress.css';
import './styles/nprogressBar.css';
import 'tailwindcss/tailwind.css';
import router from 'next/router';
import Head from 'next/head';

NProgress.configure({ showSpinner: true });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
	const getLayout = Component.getLayout || ((page) => page);
	return getLayout(
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</>
	);
}

export default MyApp;
