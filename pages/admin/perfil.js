import Head from 'next/head';
import { motion } from 'framer-motion';
// LOCAL COMPONENTS
import Layout from '../../layout';
import PageTitle from '../../components/regularComponents/Title';
import { useState } from 'react';

export default function Profile() {
	const [tab, setTab] = useState('perfil');

	return (
		<>
			<Head>
				<title>Perfil | Mapics</title>
			</Head>
			<PageTitle title="Perfil" has_button={false} />
			<motion.div
				initial={{ opacity: 0, y: -25 }}
				animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
				exit={{ opacity: 0, y: 25 }}
				className="w-full bg-white shadow-regular rounded-md flex items-stretch justify-center"
			>
				<ul className="w-full lg:w-3/12 border-r-2 border-mBackground px-8 py-10 text-mBlack">
					<li>
						<button
							type="button"
							onClick={() => setTab('perfil')}
							className={`${
								tab === 'perfil'
									? 'bg-gray-50 font-medium'
									: 'bg-transparent hover:bg-gray-50'
							} py-2 px-4 w-full text-left rounded transition-all duration-150 ease-in-out`}
						>
							Perfil
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => setTab('cuentas')}
							className={`${
								tab === 'cuentas'
									? 'bg-gray-50 font-medium'
									: 'bg-transparent hover:bg-gray-50'
							} py-2 px-4 w-full text-left rounded transition-all duration-150 ease-in-out`}
						>
							Cuentas
						</button>
					</li>
				</ul>
				<div className="w-full h-full lg:w-9/12 px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
					{/* PERFIL */}
					<form className="col-span-1 lg:col-span-2 mb-5 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-50 py-6 px-6 rounded-md">
						<h2 className="col-span-1 lg:col-span-2">
							Crear usuario nuevo
						</h2>
						<div className="col-span-1">
							<label
								htmlFor="new-email"
								className="block text-sm font-medium text-mBlack"
							>
								Correo
							</label>
							<div className="mt-1">
								<input
									type="email"
									name="new-email"
									id="new-email"
									autoComplete="nope"
									className="focus:ring-main focus:border-main block w-full sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div className="col-span-1">
							<label
								htmlFor="new-user"
								className="block text-sm font-medium text-mBlack"
							>
								Usuario
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="new-user"
									id="new-user"
									autoComplete="nope"
									className="focus:ring-main focus:border-main block w-full sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div className="col-span-1 lg:col-span-2 flex items-center justify-end">
							<button
								type="submit"
								className="bg-transparent hover:bg-mBlack border border-mBlack text-mBlack hover:text-white font-medium py-2 px-4 rounded-md transition-all duration-150 ease-cubic"
							>
								Crear usuario
							</button>
						</div>
					</form>

					<div className="col-span-1 lg:col-span-2 mb-5 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-50 py-6 px-6 rounded-md">
						<h2 className="col-span-1 lg:col-span-2">Tu cuenta</h2>
						<div className="col-span-1">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-mBlack"
							>
								Correo
							</label>
							<div className="mt-1">
								<input
									disabled
									type="text"
									name="email"
									id="email"
									autoComplete="nope"
									value="hola@rodrigogarcia.com.mx"
									className="bg-mBackground font-medium focus:ring-main focus:border-main block w-full sm:text-sm border-gray-300 rounded-md cursor-not-allowed"
								/>
							</div>
						</div>
						<div className="col-span-1">
							<label
								htmlFor="user"
								className="block text-sm font-medium text-mBlack"
							>
								Usuario
							</label>
							<div className="mt-1">
								<input
									disabled
									type="text"
									name="user"
									id="user"
									autoComplete="nope"
									value="roganoalien"
									className="bg-mBackground font-medium focus:ring-main focus:border-main block w-full sm:text-sm border-gray-300 rounded-md cursor-not-allowed"
								/>
							</div>
						</div>

						<div className="col-span-1">
							<label
								htmlFor="new-password"
								className="block text-sm font-medium text-mBlack"
							>
								Nueva contraseña
							</label>
							<div className="mt-1">
								<input
									type="password"
									name="new-password"
									id="new-password"
									autoComplete="nope"
									className="focus:ring-main focus:border-main block w-full sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div className="col-span-1">
							<label
								htmlFor="confirm-new-password"
								className="block text-sm font-medium text-mBlack"
							>
								Confirmar nueva contraseña
							</label>
							<div className="mt-1">
								<input
									type="password"
									name="confirm-new-password"
									id="confirm-new-password"
									autoComplete="nope"
									className="focus:ring-main focus:border-main block w-full sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div className="col-span-1 lg:col-span-2 flex items-center justify-end">
							<button
								type="submit"
								className="bg-main text-white font-medium py-2 px-4 rounded-md shadow-main hover:shadow-mainActive transform scale-100 hover:scale-95 transition-all duration-150 ease-cubic"
							>
								Cambiar password
							</button>
						</div>
					</div>
					{/* PERFIL END */}
				</div>
			</motion.div>
		</>
	);
}

Profile.getLayout = (page) => <Layout>{page}</Layout>;
