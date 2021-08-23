import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/outline';
import React from 'react';

function SiteTitleData() {
	return (
		<div className="w-full flex flex-col items-start justify-start text-mBlack mt-8">
			<p className="text-xs w-full mb-2">
				Porcentajes son con respecto al valor anterior
			</p>
			<div className="w-full flex items-center justify-between">
				<div className="w-auto flex items-center justify-start">
					<div className="flex flex-col items-start justify-start">
						<div className="flex items-center justify-center">
							<p className="font-bold text-4xl">18.1k</p>
							<p className="text-xs flex items-center justify-start ml-2">
								<ArrowUpIcon className="w-3 h-3 stroke-current text-green-400" />
								2%
							</p>
						</div>
						<p className="text-md">Vistas</p>
					</div>

					<div className="flex flex-col items-start justify-start ml-12">
						<div className="flex items-center justify-center">
							<p className="font-bold text-4xl">1.5k</p>
							<p className="text-xs flex items-center justify-start ml-2">
								<ArrowDownIcon className="w-3 h-3 stroke-current text-red-400" />
								1%
							</p>
						</div>
						<p className="text-md">Visitantes</p>
					</div>

					<div className="flex flex-col items-start justify-start ml-12">
						<div className="flex items-center justify-center">
							<p className="font-bold text-4xl">20%</p>
							<p className="text-xs flex items-center justify-start ml-2">
								<ArrowUpIcon className="w-3 h-3 stroke-current text-green-400" />
								10%
							</p>
						</div>
						<p className="text-md">% de rebote</p>
					</div>

					<div className="flex flex-col items-start justify-start ml-12">
						<div className="flex items-center justify-center">
							<p className="font-bold text-4xl">5s</p>
							<p className="text-xs flex items-center justify-start ml-2">
								0%
							</p>
						</div>
						<p className="text-md">Tiempo promedio de visita</p>
					</div>
				</div>
				<div className="w-auto">
					<label
						htmlFor="location"
						className="block text-xs font-medium text-gray-700 text-right"
					>
						Datos de
					</label>
					<select
						id="location"
						name="location"
						className="mt-1 block w-[150px] pl-3 pr-10 py-2 text-base border-mBlack focus:outline-none focus:ring-main focus:border-main sm:text-sm rounded-md"
					>
						<option value="hoy">hoy</option>
						<option value="semana">semana</option>
						<option value="mes">mes</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default SiteTitleData;
