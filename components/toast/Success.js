import { XIcon } from '@heroicons/react/outline';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Success({ text, shortText, closesIn, hide }) {
	const [seconds, setSeconds] = useState(closesIn / 1000);

	useEffect(() => {
		console.log('seconds', seconds);
		if (seconds > 0) {
			setTimeout(() => setSeconds(seconds - 1), 1000);
		} else {
			hide();
		}
	}, [seconds]);

	return (
		<motion.div
			initial={{ opacity: 0, y: '-100%' }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: '-100%' }}
			className="p-2 rounded-lg bg-white border border-gray-300 shadow-xl sm:p-3"
		>
			<div className="flex items-center justify-between flex-wrap">
				<div className="flex-1 flex items-center">
					<span className="flex px-2 py-1 rounded-lg bg-mBlack bg-opacity-0">
						<CheckCircleIcon className="h-8 w-8 text-[#61D345]" />
					</span>
					<p className="ml-3 font-medium text-mBlack truncate">
						<span className="md:hidden">{shortText}</span>
						<span className="hidden md:inline">{text}</span>
					</p>
				</div>
				<div className="flex items-center justify-center ml-4 px-2 py-1 order-3 mt-2 flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto relative rounded-full bg-[#61D345] bg-opacity-5 w-[24px] h-[24px]">
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						<svg
							className={`h-10 w-10 fill-current text-[#61D345] ${
								seconds > 0 ? 'animate-countdown' : ''
							}`}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z" />
						</svg>
					</div>
					<p className="text-xs text-[#61D345] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						{seconds}
					</p>
				</div>
				<div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
					<button
						onClick={() => hide()}
						type="button"
						className="group -mr-1 flex p-2 rounded-md hover:bg-mBackground focus:outline-none focus:ring-2 focus:ring-white"
					>
						<span className="sr-only">Dismiss</span>
						<XIcon
							className="h-6 w-6 text-mGrayText group-hover:text-mBlack"
							aria-hidden="true"
						/>
					</button>
				</div>
			</div>
		</motion.div>
	);
}

export default Success;
