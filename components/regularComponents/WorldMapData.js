import React, { useState, useMemo } from 'react';
// import { WorldMap } from 'react-svg-worldmap';
import ReactTooltip from 'react-tooltip';
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup
} from 'react-simple-maps';
import tinycolor from 'tinycolor2';
import { countryNamesData, geoMAP } from '../../utils/country/es-MX';
import CountryFromMap from './CountryFromMap';

const data = [
	{ country: 'mx', x: 'MX', y: 1000, z: 75 },
	{ country: 'us', x: 'US', y: 900, z: 50 }
];

function WorldMapData() {
	const [tooltip, setTooltip] = useState();
	// const primaryColor = '#4140FF';

	const colors = useMemo(
		() => ({
			baseColor: '#FF6D6D',
			// fillColor: '#F7F7F7',
			fillColor: '#FFFAFA',
			strokeColor: '#FF6D6D',
			hoverColor: '#FF6D6D'
		}),
		[]
	);
	const countryNames = countryNamesData;

	function getFillColor(code) {
		console.log(code);
		if (code === 'AQ') return;
		const country = data?.find(({ x }) => x === code);

		if (!country) {
			return colors.fillColor;
		}

		return tinycolor(colors.baseColor)['lighten'](
			40 * (1.0 - country.z / 100)
		);
	}

	function getOpacity(code) {
		return code === 'AQ' ? 0 : 1;
	}

	function handleHover(code) {
		if (code === 'AQ') return;
		const country = data?.find(({ x }) => x === code);
		setTooltip(`${countryNames[code]}: ${country?.y || 0} visitantes`);
	}

	return (
		<div className="w-full border border-mGrayBorder mt-5 rounded-md flex items-stretch justify-start overflow-hidden">
			<div className="w-1/3 border-r border-mGrayBorder py-8 px-6 flex flex-col z-10">
				<div className="w-full flex items-start justify-between mb-1">
					<p className="text-mBlack text-md font-bold text-left m-0">
						Países
					</p>
					<p className="text-mBlack text-md font-bold text-right m-0">
						Visitantes
					</p>
				</div>
				<CountryFromMap country="México" visits={1000} width="60%" />
				<CountryFromMap country="EE.UU" visits={900} width="40%" />
			</div>
			<div className="w-2/3" data-tip="" data-for="world-map-tooltip">
				<ComposableMap projection="geoMercator">
					<ZoomableGroup zoom={0.8} minZoom={0.7} center={[0, 40]}>
						<Geographies geography={geoMAP}>
							{({ geographies }) => {
								return geographies.map((geo) => {
									const code = geo.properties.ISO_A2;
									return (
										<Geography
											key={geo.rsmKey}
											geography={geo}
											fill={getFillColor(code)}
											stroke={colors.strokeColor}
											opacity={getOpacity(code)}
											style={{
												default: { outline: 'none' },
												hover: {
													outline: 'none',
													fill: colors.hoverColor
												},
												pressed: { outline: 'none' }
											}}
											onMouseOver={() =>
												handleHover(code)
											}
											onMouseOut={() => setTooltip(null)}
										/>
									);
								});
							}}
						</Geographies>
					</ZoomableGroup>
				</ComposableMap>
				<ReactTooltip
					id="world-map-tooltip"
					// backgroundColor="#3B3B3B"
					backgroundColor="#F6F6F6"
					textColor="#3b3b3b"
					border={true}
					// borderColor="#3b3b3b"
					borderColor="#DCDCDC"
					className="bg-opacity-100"
				>
					{tooltip}
				</ReactTooltip>
			</div>
		</div>
	);
}

export default WorldMapData;
