import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { useState } from 'react';
import { visitantesFake, dataBarra } from '../../utils/data.fake';
import { motion } from 'framer-motion';

function MainChart() {
	const [type, setType] = useState('línea');

	return (
		<>
			<p className="text-xs text-mGrayText text-center mt-8 w-full">
				Usa los botones para cambiar el tipo de gráfica. El reporte
				tendrá la gráfica seleccionada
			</p>
			<div className="w-full flex items-center justify-center mt-2 mb-5">
				<button
					type="button"
					onClick={() => setType('línea')}
					className={`w-[86px] py-2 text-mGrayText rounded-l-md border border-mGrayBorder text-sm focus:z-0 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ${
						type === 'línea'
							? 'bg-[#4140FF] border-[#4140FF] text-white'
							: 'bg-transparent hover:bg-gray-50'
					}`}
				>
					línea
				</button>
				<button
					type="button"
					onClick={() => setType('barra')}
					className={`-ml-px w-[86px] py-2 text-mGrayText rounded-r-md border border-mGrayBorder text-sm focus:z-0 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ${
						type === 'barra'
							? 'bg-[#4140FF] border-[#4140FF] text-white'
							: 'bg-transparent hover:bg-gray-50'
					}`}
				>
					barras
				</button>
			</div>
			<div className="w-full h-[500px] overflow-hidden relative">
				{type === 'línea' && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="w-full h-[500px]"
					>
						<ResponsiveLine
							data={visitantesFake}
							colors={(d) => d.color}
							margin={{
								top: 10,
								right: 95,
								bottom: 50,
								left: 50
							}}
							curve="catmullRom"
							xScale={{ type: 'point' }}
							yScale={{
								type: 'linear',
								min: 'auto',
								max: 'auto',
								stacked: false,
								reverse: false
							}}
							axisTop={null}
							axisRight={null}
							axisBottom={{
								orient: 'bottom',
								tickSize: 5,
								tickPadding: 5,
								tickRotation: 0,
								legend: null,
								legendOffset: 0,
								legendPosition: 'middle',
								format: () => null
							}}
							axisLeft={{
								orient: 'left',
								tickSize: 10,
								tickPadding: 5,
								tickRotation: 0,
								legend: null,
								legendOffset: 0,
								legendPosition: 'middle'
							}}
							pointSize={10}
							pointColor="#fff"
							pointBorderWidth={2}
							pointBorderColor={{ from: 'serieColor' }}
							pointLabelYOffset={-12}
							useMesh={true}
							legends={[
								{
									anchor: 'right',
									direction: 'column',
									justify: false,
									translateX: 90,
									translateY: 0,
									itemsSpacing: 0,
									itemDirection: 'left-to-right',
									itemWidth: 80,
									itemHeight: 20,
									itemOpacity: 1,
									symbolSize: 10,
									symbolShape: 'circle',
									symbolBorderColor: 'rgba(0, 0, 0, 0)',
									effects: [
										{
											on: 'hover',
											style: {
												itemBackground:
													'rgba(0, 0, 0, .05)',
												itemOpacity: 1
											}
										}
									]
								}
							]}
							lineWidth={3}
							enableArea={true}
							areaOpacity={0.05}
							areaBlendMode="multiply"
						/>
					</motion.div>
				)}
				{type === 'barra' && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="w-full h-[500px]"
					>
						<ResponsiveBar
							data={dataBarra}
							keys={['visitantes', 'vistas']}
							indexBy="time"
							margin={{
								top: 10,
								right: 95,
								bottom: 50,
								left: 50
							}}
							padding={0.3}
							valueScale={{ type: 'linear' }}
							indexScale={{ type: 'band', round: true }}
							valueFormat={{ format: '', enabled: false }}
							colors={({ id, data }) => data[`${id}Color`]}
							axisTop={null}
							axisRight={null}
							axisBottom={{
								tickSize: 5,
								tickPadding: 5,
								tickRotation: 0,
								legend: null,
								legendPosition: 'middle',
								legendOffset: 32
							}}
							axisLeft={{
								tickSize: 5,
								tickPadding: 5,
								tickRotation: 0,
								legend: null,
								legendPosition: 'middle',
								legendOffset: -40
							}}
							labelSkipWidth={12}
							labelSkipHeight={12}
							labelTextColor="#ffffff"
							legends={[
								{
									dataFrom: 'keys',
									anchor: 'right',
									direction: 'column',
									justify: false,
									translateX: 120,
									translateY: 0,
									itemsSpacing: 2,
									itemWidth: 100,
									itemHeight: 20,
									itemDirection: 'left-to-right',
									itemOpacity: 1,
									symbolSize: 20,
									effects: [
										{
											on: 'hover',
											style: {
												itemBackground:
													'rgba(0, 0, 0, .05)',
												itemOpacity: 1
											}
										}
									]
								}
							]}
						/>
					</motion.div>
				)}
			</div>
		</>
	);
}

export default MainChart;
