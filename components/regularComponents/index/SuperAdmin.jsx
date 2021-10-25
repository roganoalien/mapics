import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import {
	superAdminValidate,
	superAdminValues
} from '../../../utils/utils.formik';
import Loader from '../../loaders/Loader';
import { postOpen } from '../../../utils/utils.open.api';

function SuperAdmin({ registered }) {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [sending, setSending] = useState(false);

	const handleSubmit = async (values) => {
		setSending(true);
		const response = await postOpen('auth/local/register', values);
		console.log(response);
		if (response.status === 201) {
			registered();
		} else {
			setSending(false);
		}
	};

	return (
		<motion.div
			className="w-full"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h1 className="font-bold text-mBlack text-3xl tracking-wide w-full">
				Crear Administrador
			</h1>
			<Formik
				initialValues={superAdminValues}
				validate={superAdminValidate}
				onSubmit={handleSubmit}
			>
				<Form className="w-full flex flex-col items-start justify-start">
					<div className="w-full mt-10 flex flex-col">
						<label
							htmlFor="name"
							className="text-md flex items-center justify-between"
						>
							Nombre
							<span className="text-xs text-red-400">
								<ErrorMessage name="name" />
							</span>
						</label>
						<Field
							type="text"
							name="name"
							id="name"
							className="mt-2 bg-transparent border-2 border-mGrayBorder rounded-md py-2 px-4 outline-none focus:ring-0 focus:border-main text-mBlack text-opacity-75"
						/>
					</div>
					<div className="w-full mt-5 flex flex-col">
						<label
							htmlFor="email"
							className="text-md flex items-center justify-between"
						>
							Correo electrónico
							<span className="text-xs text-red-400">
								<ErrorMessage name="email" />
							</span>
						</label>
						<Field
							type="email"
							name="email"
							id="email"
							className="mt-2 bg-transparent border-2 border-mGrayBorder rounded-md py-2 px-4 outline-none focus:ring-0 focus:border-main text-mBlack text-opacity-75"
						/>
					</div>
					<div className="w-full mt-5 flex flex-col relative">
						<label
							htmlFor="password"
							className="text-md flex items-center justify-between"
						>
							Contraseña
							<span className="text-xs text-red-400">
								<ErrorMessage name="password" />
							</span>
						</label>
						<Field
							type={showPassword ? 'text' : 'password'}
							name="password"
							id="password"
							className="mt-2 bg-transparent border-2 border-mGrayBorder rounded-md py-2 px-4 outline-none focus:ring-0 focus:border-main text-mBlack text-opacity-75"
						/>
						{showPassword ? (
							<EyeOffIcon
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-4 bottom-1 w-auto h-8 stroke-current text-mGrayBorder cursor-pointer"
							/>
						) : (
							<EyeIcon
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-4 bottom-1 w-auto h-8 stroke-current text-mGrayBorder cursor-pointer"
							/>
						)}
					</div>
					<div className="w-full mt-5 flex flex-col relative">
						<label
							htmlFor="confirm_password"
							className="text-md flex items-center justify-between"
						>
							Contraseña
							<span className="text-xs text-red-400">
								<ErrorMessage name="confirm_password" />
							</span>
						</label>
						<Field
							type={showConfirmPassword ? 'text' : 'password'}
							name="confirm_password"
							id="confirm_password"
							className="mt-2 bg-transparent border-2 border-mGrayBorder rounded-md py-2 px-4 outline-none focus:ring-0 focus:border-main text-mBlack text-opacity-75"
						/>
						{showConfirmPassword ? (
							<EyeOffIcon
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
								className="absolute right-4 bottom-1 w-auto h-8 stroke-current text-mGrayBorder cursor-pointer"
							/>
						) : (
							<EyeIcon
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
								className="absolute right-4 bottom-1 w-auto h-8 stroke-current text-mGrayBorder cursor-pointer"
							/>
						)}
					</div>
					<div className="w-full mt-3 flex items-center justify-center">
						<button
							type="submit"
							className="w-full py-2 flex items-center justify-center bg-main text-white rounded-md shadow-main font-bold tracking-wide transform scale-100 transition duration-150 ease-cubic hover:scale-95 active:scale-95 focus:scale-95 hover:shadow-mainActive active:shadow-mainActive focus:shadow-mainActive"
						>
							{sending ? (
								<Loader size="6" horizontal={true} />
							) : (
								'Registrar administrador'
							)}
						</button>
					</div>
				</Form>
			</Formik>
		</motion.div>
	);
}

export default SuperAdmin;
