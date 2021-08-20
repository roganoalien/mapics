import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
	AdjustmentsIcon,
	GlobeAltIcon,
	TrashIcon
} from '@heroicons/react/outline';
import NextLink from '../../nextComponents/NextLink';

function CardSite({
	favicon = undefined,
	site = 'defaultname.com',
	visits = 0,
	clicks = 0,
	id = 0,
	settings = false,
	delay = 0
}) {
	const [theFavicon, setTheFavicon] = useState({
		url: undefined,
		loading: true,
		error: false
	});
	const containerChild = {
		hidden: { opacity: 0, y: 15 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				delay: delay * 0.1
			}
		}
	};
	const url = site.replace('https://', '').replace('http://', '');

	useEffect(() => {
		const tempImage = new Image();
		tempImage.onload = (e) => {
			setTheFavicon({ url: favicon, loading: false, error: false });
		};
		tempImage.onerror = () => {
			setTheFavicon({ url: undefined, loading: false, error: true });
		};
		tempImage.src = favicon;
	}, []);

	return (
		<motion.div
			variants={containerChild}
			initial="hidden"
			animate="show"
			exit="hidden"
		>
			<div className="flex rounded-md bg-white col-span-1 flex-col items-start justify-start border border-mGrayBorder transform scale-100 shadow-none hover:scale-110 hover:border-main hover:shadow-regular duration-100 transition-all ease-in-out">
				<NextLink href={`/admin/site/${id}`} className="p-4">
					<span>
						<div className="w-full flex items-center justify-start text-mBlack">
							{theFavicon.loading ? (
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 fill-current"
								>
									<path d="M0 0h24v24H0z" fill="none" />
									<path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z" />
								</svg>
							) : theFavicon.error ? (
								<GlobeAltIcon className="w-6 h-6 stroke-current mr-3" />
							) : (
								<img
									src={theFavicon.url}
									alt={site}
									className="w-6 h-6 object-contain mr-3"
								/>
							)}
							<p className="m-0 font-bold text-md">{url}</p>
						</div>
						<div className="w-full flex items-center justify-between text-mBlack mt-2">
							<p className="m-0 text-sm">
								hoy <strong>{visits}</strong> visitas y{' '}
								<strong>{clicks}</strong> clicks
							</p>
							{settings && (
								<div className="buttons flex items-center justify-between ml-2">
									<button type="button">
										<AdjustmentsIcon className="w-7 h-7 stroke-current text-gray-300" />
									</button>
									<button type="button">
										<TrashIcon className="w-7 h-7 stroke-current text-gray-300" />
									</button>
								</div>
							)}
						</div>
					</span>
				</NextLink>
			</div>
		</motion.div>
	);
}

export default CardSite;
