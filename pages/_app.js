import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { AnimatePresence } from 'framer-motion';
// REDUX
import { Provider } from 'react-redux';
import store from '../redux/store';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'nprogress/nprogress.css';
import './styles/nprogressBar.css';
import './styles/TippyCustom.css';
import 'tailwindcss/tailwind.css';

NProgress.configure({ showSpinner: true });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
	const getLayout = Component.getLayout || ((page) => page);
	return (
		<Provider store={store}>
			{getLayout(
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
			)}
		</Provider>
	);
}

export default MyApp;
