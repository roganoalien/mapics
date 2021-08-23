import React from 'react';
import { PlusIcon, AdjustmentsIcon, TrashIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';

function PageTitle({
	title,
	the_span,
	has_span = false,
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
			{has_span ? (
				<h1
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -50 }}
					className="font-bold text-mBlack text-2xl pr-3 whitespace-nowrap"
				>
					{title} <span className="text-mGrayLight">{the_span}</span>
				</h1>
			) : (
				<h1
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -50 }}
					className="font-bold text-mBlack text-2xl pr-3 whitespace-nowrap"
				>
					{title}
				</h1>
			)}
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
				<>
					<Tippy
						delay={[50, 0]}
						arrow={false}
						followCursor={true}
						plugins={[followCursor]}
						animation="scale"
						ignoreAttributes={false}
						role="toolTip"
						offset={[0, 10]}
						content={
							<p className="font-medium text-center text-mGray">
								configuración
							</p>
						}
					>
						<button className="flex items-center justify-center ml-5">
							<AdjustmentsIcon className="w-10 h-10 stroke-current text-mGrayLight hover:text-mGrayText transition duration-150 ease-in-out" />
						</button>
					</Tippy>
					<Tippy
						delay={[50, 0]}
						arrow={false}
						followCursor={true}
						plugins={[followCursor]}
						animation="scale"
						ignoreAttributes={false}
						role="toolTip"
						offset={[0, 10]}
						content={
							<p className="font-medium text-center text-mGrayText">
								eliminar
							</p>
						}
					>
						<button className="flex items-center justify-center ml-3">
							<TrashIcon className="w-10 h-10 stroke-current text-mGrayLight hover:text-mGrayText transition duration-150 ease-in-out" />
						</button>
					</Tippy>
				</>
			) : null}
		</div>
	);
}

export default PageTitle;
