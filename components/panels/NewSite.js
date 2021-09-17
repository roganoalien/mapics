import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from '@heroicons/react/outline';

function NewSite({ close }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="absolute left-0 top-0 w-screen h-full z-50"
		>
			<div
				onClick={close}
				className="absolute left-0 top-0 w-full h-full bg-mGray opacity-75 z-10"
				style={{ cursor: 'zoom-out' }}
			></div>
			<motion.div
				initial={{ opacity: 0, top: '52%' }}
				animate={{ opacity: 1, top: '50%' }}
				exit={{ opacity: 0, top: '52%' }}
				className="the-panel absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
			>
				<div className="bg-white shadow-regular sm:rounded-lg">
					<div
						className="absolute top-3 right-3 cursor-pointer"
						onClick={close}
					>
						<XIcon className="stroke-current text-mBlack w-6 h-6" />
					</div>
					<div className="px-4 sm:p-8 max-w-md">
						<h3 className="relative text-lg leading-6 font-bold text-mBlack text-center mb-5 mx-auto w-10/12">
							<div
								className="absolute inset-0 flex items-center"
								aria-hidden="true"
							>
								<div className="w-full border-t border-gray-300" />
							</div>
							<div className="relative flex justify-center">
								<span className="px-3 bg-white">
									Nuevo Sitio
								</span>
							</div>
						</h3>
						<div className="mt-2 max-w-xl text-sm text-mBlack space-y-2">
							<p className="leading-5">
								Agrega un sitio para iniciar a registrar las
								vistas, acciones y demás información.{' '}
							</p>
							<p className="text-mGrayText leading-5">
								Solo se aceptan urls con certificado de
								seguridad (https)
							</p>
						</div>
						<form className="mt-5 grid grid-cols-1 gap-y-4">
							<div className="col-span-1">
								<label
									htmlFor="domain"
									className="block text-sm font-medium text-gray-700"
								>
									Url del sitio
								</label>
								<div className="mt-1 flex rounded-md group">
									<span className="group-focus-within:border-main group-focus-within:ring-main group-focus-within:ring-1 inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-mBackground text-mGray sm:text-sm">
										https://
									</span>
									<input
										type="text"
										name="domain"
										id="domain"
										autoComplete="domain"
										className="flex-1 focus:ring-main focus:border-main block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
									/>
								</div>
							</div>
							<div className="col-span-1">
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Nombre del sitio
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="name"
										id="name"
										autoComplete="url-name"
										className="focus:ring-main focus:border-main block w-full sm:text-sm border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<label
								htmlFor="public"
								className="relative flex items-start col-span-1 bg-gray-50 rounded-md p-4"
							>
								<div className="flex items-center h-5">
									<input
										id="public"
										aria-describedby="public-description"
										name="public"
										type="checkbox"
										className="focus:ring-main h-4 w-4 text-main border-gray-300 rounded"
									/>
								</div>
								<div className="ml-3 text-sm">
									<label
										htmlFor="public"
										className="font-medium text-mBlack"
									>
										Reporte público
									</label>
									<p
										id="public-description"
										className="text-mGrayText"
									>
										Se puede acceder al informe con una url
										pública
									</p>
								</div>
							</label>
							<div className="col-span-1 flex items-center justify-center space-x-6">
								<button
									type="reset"
									onClick={close}
									className="bg-white px-3 py-2 rounded-md text-mGrayText border border-mGrayBorder transition-all duration-150 ease-cubic transform hover:scale-90 scale-100"
								>
									Cancelar
								</button>
								<button
									type="submit"
									onClick={close}
									className="bg-main shadow-mainActive px-3 py-2 rounded-md text-white font-medium transition-all duration-150 ease-cubic hover:shadow-main transform scale-100 hover:scale-105"
								>
									Agregar sitio
								</button>
							</div>
						</form>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default NewSite;
