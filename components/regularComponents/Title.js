import React, { useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

function PageTitle({
	title,
	has_button = false,
	add_button = false,
	other_buttons = false
}) {
	return (
		<div className="page-title w-full lg:w-10/12 mx-auto flex items-center justify-start my-14 relative overflow-hidden">
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: '100%' }}
				exit={{ y: 0 }}
				className="absolute left-0 -top-0 h-full bg-mBackground z-10 w-full"
			></motion.div>
			<h1
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -50 }}
				className="font-bold text-mBlack text-2xl pr-3 whitespace-nowrap"
			>
				{title}
			</h1>
			<div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="h-[2px] translate-x-1 bg-mGrayBorder w-full rounded-full transition-all duration-150 ease-in-out"
			></div>
			{has_button && add_button ? (
				<button
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 50 }}
					type="button"
					className="bg-main text-white font-bold flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 ml-5 shadow-main transform scale-100 hover:scale-95 transition-all duration-100 ease-in-out hover:shadow-mainActive z-0"
				>
					<PlusIcon className="w-4 h-4 mr-1 stroke-current text-white" />
					<p className="m-0 font-medium">Agregar sitio</p>
				</button>
			) : other_buttons ? (
				<p>Otros botones</p>
			) : null}
		</div>
	);
}

export default PageTitle;
