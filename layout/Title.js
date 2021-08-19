import React from 'react';
import { PlusIcon } from '@heroicons/react/outline';

function PageTitle({ title, has_button = false }) {
	return (
		<div className="page-title w-full lg:w-10/12 mx-auto flex items-center justify-start my-14">
			<h1 className="font-bold text-mBlack text-2xl pr-3 whitespace-nowrap">
				{title}
			</h1>
			<div className="h-[2px] translate-x-1 bg-mGrayBorder w-full rounded-full"></div>
			<button
				type="button"
				className="bg-main text-white font-bold flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 ml-5 shadow-main transform scale-100 hover:scale-95 transition-all duration-100 ease-cubic z-0"
			>
				<PlusIcon className="w-4 h-4 mr-1 stroke-current text-white" />
				<p className="m-0 font-medium">Agregar sitio</p>
			</button>
		</div>
	);
}

export default PageTitle;
