import React from 'react';

function HorizontalDivider({ color = 'main', text }) {
	const colorSelect = (value) => {
		switch (value) {
			case 'blue':
				return '[#4140FF]';
			case 'black':
				return 'mBlack';
			default:
				return 'main';
		}
	};

	return (
		<div className="relative w-full lg:w-10/12 my-5">
			<div
				className="absolute inset-0 flex items-center"
				aria-hidden="true"
			>
				<div
					className={`w-full border-t border-${colorSelect(color)}`}
				/>
			</div>
			<div className="relative flex justify-center">
				<span
					className={`px-3 bg-white text-lg font-medium text-${colorSelect(
						color
					)}`}
				>
					{text}
				</span>
			</div>
		</div>
	);
}

export default HorizontalDivider;
