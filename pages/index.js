import Head from 'next/head';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export default function Home() {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<Head>
				<title>Mapics</title>
			</Head>
			<main className="h-screen w-screen overflow-x-hidden bg-mBackground flex items-start justify-center">
				<div className="left w-full md:w-1/2 bg-white h-auto md:h-screen flex flex-col items-center justify-center">
					<img
						src="/main-logo-png.png"
						alt="Mapics Analytics transparentes y privados"
						className="main-logo h-24 w-auto -translate-x-8 mt-32 mb-14"
					/>
					{/* <div className="flex flex-wrap items-center justify-start w-8/12">
						<div className="holder w-full flex items-center justify-start">
							<svg
								height="30"
								width="35"
								viewBox="0 0 35 30"
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-auto"
							>
								<defs />
								<g
									fill="none"
									fillRule="evenodd"
									stroke="none"
									strokeWidth="1"
								>
									<g transform="translate(-83.000000, -355.000000)">
										<g transform="translate(83.000000, 355.000000)">
											<path
												d="M0.511363636,4.28571429 C0.511363636,1.91877857 2.41924006,0 4.77272727,0 L30.3409091,0 C32.6944602,0 34.6022727,1.91877857 34.6022727,4.28571429 L34.6022727,8.57142857 C34.6022727,10.9383643 32.6944602,12.8571429 30.3409091,12.8571429 L4.77272727,12.8571429 C2.41924006,12.8571429 0.511363636,10.9383643 0.511363636,8.57142857 L0.511363636,4.28571429 Z M30.3409091,6.42857143 C30.3409091,7.61202857 29.3870028,8.57142857 28.2102273,8.57142857 C27.0334517,8.57142857 26.0795455,7.61202857 26.0795455,6.42857143 C26.0795455,5.24511429 27.0334517,4.28571429 28.2102273,4.28571429 C29.3870028,4.28571429 30.3409091,5.24511429 30.3409091,6.42857143 Z M0.511363636,21.4285714 C0.511363636,19.0615714 2.41924006,17.1428571 4.77272727,17.1428571 L30.3409091,17.1428571 C32.6944602,17.1428571 34.6022727,19.0615714 34.6022727,21.4285714 L34.6022727,25.7142857 C34.6022727,28.0812857 32.6944602,30 30.3409091,30 L4.77272727,30 C2.41924006,30 0.511363636,28.0812857 0.511363636,25.7142857 L0.511363636,21.4285714 Z M30.3409091,23.5714286 C30.3409091,24.7549286 29.3870028,25.7142857 28.2102273,25.7142857 C27.0334517,25.7142857 26.0795455,24.7549286 26.0795455,23.5714286 C26.0795455,22.3879286 27.0334517,21.4285714 28.2102273,21.4285714 C29.3870028,21.4285714 30.3409091,22.3879286 30.3409091,23.5714286 Z"
												fill="#FF6D6D"
											/>
										</g>
									</g>
								</g>
							</svg>
							<div className="intel ml-8 flex flex-col items-start justify-start">
								<p className="text-mBlack font-bold m-0">
									Servidor
								</p>
								<p className="text-mBlack text-md m-0 leading-none">
									Manten tus analytics en tu propio servidor
								</p>
							</div>
						</div>
						<div className="holder w-full flex items-center justify-start mt-6">
							<svg
								height="20"
								width="20"
								fill="none"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								className="h-11 w-auto"
							>
								<path
									d="M3 12V15C3 16.6569 6.13401 18 10 18C13.866 18 17 16.6569 17 15V12C17 13.6569 13.866 15 10 15C6.13401 15 3 13.6569 3 12Z"
									fill="#FF6D6D"
								/>
								<path
									d="M3 7V10C3 11.6569 6.13401 13 10 13C13.866 13 17 11.6569 17 10V7C17 8.65685 13.866 10 10 10C6.13401 10 3 8.65685 3 7Z"
									fill="#FF6D6D"
								/>
								<path
									d="M17 5C17 6.65685 13.866 8 10 8C6.13401 8 3 6.65685 3 5C3 3.34315 6.13401 2 10 2C13.866 2 17 3.34315 17 5Z"
									fill="#FF6D6D"
								/>
							</svg>
							<div className="intel ml-6 flex flex-col items-start justify-start">
								<p className="text-mBlack font-bold m-0">
									Base de datos
								</p>
								<p className="text-mBlack text-md m-0 leading-none">
									Conecta tu servicio de DB local o
									externamente
								</p>
							</div>
						</div>
						<div className="holder w-full flex items-center justify-start mt-6">
							<svg
								height="24"
								width="24"
								fill="none"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="h-12 w-auto"
							>
								<path
									d="M11.9999 11C11.9999 14.5172 10.9911 17.7988 9.24707 20.5712M5.80688 18.5304C5.82459 18.5005 5.84273 18.4709 5.8613 18.4413C7.2158 16.2881 7.99991 13.7418 7.99991 11C7.99991 8.79086 9.79077 7 11.9999 7C14.209 7 15.9999 8.79086 15.9999 11C15.9999 12.017 15.9307 13.0186 15.7966 14M13.6792 20.8436C14.2909 19.6226 14.7924 18.3369 15.1707 17M19.0097 18.132C19.6547 15.8657 20 13.4732 20 11C20 6.58172 16.4183 3 12 3C10.5429 3 9.17669 3.38958 8 4.07026M3 15.3641C3.64066 14.0454 4 12.5646 4 11C4 9.54285 4.38958 8.17669 5.07026 7"
									stroke="#FF6D6D"
									strokeLinecap="round"
									strokeWidth="2"
								/>
							</svg>
							<div className="intel ml-5 flex flex-col items-start justify-start">
								<p className="text-mBlack font-bold m-0">
									Privacidad
								</p>
								<p className="text-mBlack text-md m-0 leading-none">
									Tus datos seguros y recolectados de forma
									anónima
								</p>
							</div>
						</div>
					</div> */}
					{/* <div className="creator w-full flex flex-col items-center justify-center mt-20">
						<p className="leading-none text-mBlack text-center w-full text-md">
							Hecho por{' '}
							<a
								className="font-bold text-main"
								href="https://rodrigogarcia.com.mx"
							>
								Rodrigo García
							</a>
						</p>
						<a
							href="https://github.com/roganoalien/mapics"
							className="flex items-center mt-8"
						>
							<svg
								height="24"
								width="24"
								fill="none"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-auto fill-current text-mBlack hover:text-main"
							>
								<path
									d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z"
									fillRule="evenodd"
								/>
							</svg>
						</a>
					</div> */}
				</div>
				<div className="right w-full md:w-1/2 h-auto md:h-screen flex flex-col items-center justify-center px-32">
					<h1 className="font-bold text-mBlack text-4xl tracking-wide w-full">
						Iniciar Sesión
					</h1>
					<form className="w-full flex flex-col items-start justify-start">
						<div className="w-full mt-10 flex flex-col">
							<label htmlFor="username" className="text-md">
								Usuario
							</label>
							<input
								type="text"
								className="mt-2 bg-transparent border-2 border-mGrayBorder rounded-md py-2 px-4 outline-none focus:ring-0 focus:border-main text-mGray"
							/>
						</div>
						<div className="w-full mt-5 flex flex-col relative">
							<label htmlFor="username" className="text-md">
								Password
							</label>
							<input
								type={showPassword ? 'text' : 'password'}
								className="mt-2 bg-transparent border-2 border-mGrayBorder rounded-md py-2 px-4 outline-none focus:ring-0 focus:border-main text-mGray"
							/>
							{showPassword ? (
								<EyeOffIcon
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="absolute right-4 bottom-1 w-auto h-8 stroke-current text-mGrayBorder cursor-pointer"
								/>
							) : (
								<EyeIcon
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="absolute right-4 bottom-1 w-auto h-8 stroke-current text-mGrayBorder cursor-pointer"
								/>
							)}
						</div>
						<div className="w-full mt-3 flex items-center justify-start">
							<div className="flex items-center h-5">
								<input
									id="comments"
									aria-describedby="comments-description"
									name="comments"
									type="checkbox"
									className="focus:ring-main h-4 w-4 bg-transparent text-main border-mGrayText rounded"
								/>
							</div>
							<div className="ml-3 text-sm">
								<label
									htmlFor="comments"
									className="font-medium text-mGrayText"
								>
									Mantener sesión
								</label>
							</div>
						</div>
						<div className="w-full mt-3 flex items-center justify-center">
							<button
								type="submit"
								className="w-full py-2 flex items-center justify-center bg-main text-white rounded-md shadow-main font-bold tracking-wide transform scale-100 transition duration-150 ease-cubic hover:scale-95 active:scale-95 focus:scale-95 hover:shadow-mainActive active:shadow-mainActive focus:shadow-mainActive"
							>
								Iniciar sesión
							</button>
						</div>
					</form>
				</div>
			</main>
		</>
	);
}
