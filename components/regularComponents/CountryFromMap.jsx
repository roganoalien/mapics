import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';

function CountryFromMap({ country, visits, width, has_states = false }) {
	const [showStates, setShowStates] = useState(false);

	return (
		<div className="group">
			<div className="w-full mt-1 py-1 relative text-mBlack flex items-center justify-between">
				{has_states ? (
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
								ver por estados
							</p>
						}
					>
						<button
							type="button"
							onClick={() => setShowStates(!showStates)}
							className="text-left m-0 z-10 cursor-pointer flex items-center justify-start text-mBlack group-hover:font-medium group-hover:text-[#4140FF]"
						>
							{country}
							<div className="flex items-center justify-center ml-2 text-mBlack group-hover:text-[#4140FF]">
								<ChevronDownIcon
									className={`w-5 h-5 stroke-current transition duration-150 ease-in-out transform ${
										showStates ? 'rotate-180' : 'rotate-0'
									}`}
								/>
							</div>
						</button>
					</Tippy>
				) : (
					<p className="text-left m-0 z-10">{country}</p>
				)}
				<p className="text-right m-0 z-10 group-hover:font-medium">
					{visits}
				</p>
				<span
					// className="absolute left-0 top-0 h-full bg-mGrayLight bg-opacity-25 -translate-x-2"
					className="absolute left-0 top-0 h-full max-h-[32px] bg-blue-200 group-hover:bg-[#4140FF] bg-opacity-25 group-hover:bg-opacity-25 -translate-x-2"
					style={{ width }}
				></span>
			</div>
			<AnimatePresence exitBeforeEnter>
				{showStates && (
					<motion.ul
						initial={{ height: 0 }}
						animate={{ height: 'auto' }}
						exit={{ height: 0 }}
						className="pl-1 w-full flex flex-col items-start justify-start overflow-hidden"
					>
						<li className="w-full flex items-center justify-between text-mGray group-hover:text-mBlack">
							<p className="m-0 text-sm">Michoacán</p>
							<p className="m-0 text-sm text-right">100</p>
						</li>
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
}
// bg-[#4140FF]

export default CountryFromMap;
