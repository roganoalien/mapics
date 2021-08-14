import { useRouter } from 'next/router';
import { TOKEN } from '../utils/util.constants';

const withAuth = (WrappedComponent) => {
	return (props) => {
		if (typeof window !== 'undefined') {
			const Router = useRouter();
			const accessToken =
				localStorage.getItem(TOKEN) || sessionStorage.getItem(TOKEN);
			if (!accessToken) {
				Router.replace('/');
				return null;
			}
			return <WrappedComponent {...props} />;
		}
		return null;
	};
};

export default withAuth;
