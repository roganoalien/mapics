import React from 'react';

function CountryFromMap({ country, visits, width }) {
	return (
		<div className="w-full mt-1 py-1 relative text-mBlack flex items-center justify-between">
			<p className="text-left m-0 z-10">{country}</p>
			<p className="text-right m-0 z-10">{visits}</p>
			<span
				className="absolute left-0 top-0 h-full bg-mGrayLight bg-opacity-25 -translate-x-2"
				style={{ width }}
			></span>
		</div>
	);
}
// bg-[#4140FF]

export default CountryFromMap;
