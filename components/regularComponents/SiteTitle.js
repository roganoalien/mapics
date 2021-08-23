import React, { useEffect, useState } from 'react';
import { GlobeAltIcon, DocumentDownloadIcon } from '@heroicons/react/outline';

function SiteTitle({ site }) {
	const [favicon, setFavicon] = useState({
		url: `${site}/favicon.ico`,
		loading: true,
		error: false
	});
	const title = site.replace('https://', '').replace('http://', '');

	useEffect(() => {
		const tempImage = new Image();
		tempImage.onload = (e) => {
			setFavicon({ url: favicon.url, loading: false, error: false });
		};
		tempImage.onerror = () => {
			setFavicon({ url: undefined, loading: false, error: true });
		};
		tempImage.src = `${site}/favicon.ico`;
	}, []);

	return (
		<div className="w-full flex items-center justify-center">
			<div className="w-1/3 flex items-center justify-start text-mBlack">
				{favicon.loading ? (
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6 fill-current"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z" />
					</svg>
				) : favicon.error ? (
					<GlobeAltIcon className="w-6 h-6 stroke-current mr-3" />
				) : (
					<img
						src={favicon.url}
						alt={site}
						className="w-6 h-6 object-contain mr-3"
					/>
				)}
				<h2 className="m-0 font-bold text-2xl">{title}</h2>
			</div>
			<div className="w-1/3 flex items-center justify-center text-mBlack">
				<span className="w-3 h-3 bg-green-300 rounded-full relative">
					<span className="absolute w-full h-full rounded-full animate-ping bg-green-300"></span>
				</span>
				<p className="text-sm ml-2">
					<strong>5</strong> usuarios en línea
				</p>
			</div>
			<div className="w-1/3 flex items-center justify-end text-mBlack">
				<button
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 50 }}
					type="button"
					className="bg-main text-white font-bold flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 ml-5 shadow-main transform scale-100 hover:scale-95 transition-all duration-100 ease-in-out hover:shadow-mainActive z-0"
				>
					<DocumentDownloadIcon className="w-4 h-4 mr-1 stroke-current text-white" />
					<p className="m-0 font-medium">Descargar reporte</p>
				</button>
			</div>
		</div>
	);
}

export default SiteTitle;
