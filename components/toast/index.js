import { useEffect, useState } from 'react';
import useTimeout from '../../hooks/useTimeout';
import Success from './Success';

function Toast({ hide }) {
	const [displayChild, setDisplayChild] = useState(false);
	useTimeout(() => setDisplayChild(true), 0);

	return (
		<div className="fixed top-0 inset-x-0 pt-2 sm:pt-5 z-50 flex items-center justify-center">
			<div className="w-auto mx-auto px-2 sm:px-6 lg:px-8">
				{displayChild && (
					<Success
						hide={hide}
						closesIn={5000}
						text="Site added correctly!"
						shortText="Success!"
					/>
				)}
			</div>
		</div>
	);
}

export default Toast;
