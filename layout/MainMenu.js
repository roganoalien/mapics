import { Fragment, useState } from 'react';
import NextLink from '../nextComponents/NextLink';
import ActiveLink from '../nextComponents/ActiveLink';
import { Menu, Transition, Switch } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/solid';
import { ChevronDownIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function MainMenu() {
	const [isNight, setIsNight] = useState(false);

	return (
		<div className="w-full">
			<nav className="container mx-auto py-5 flex items-center justify-between px-10 md:px-5">
				<div className="w-2/12">
					<NextLink href="/admin">
						<img src="/mapics-horizontal-png.png" alt="Mapics" />
					</NextLink>
				</div>
				<ul className="w-7/12 flex items-center justify-end">
					<li>
						<ActiveLink
							href="/admin"
							activeClassName="text-mBlack font-medium"
							className="text-mGrayText hover:text-mBlack"
						>
							<a>Sitios</a>
						</ActiveLink>
					</li>
					<li className="ml-8">
						<ActiveLink
							href="/admin/configuracion"
							activeClassName="text-mBlack"
							className="text-mGrayText hover:text-mBlack"
						>
							<a>Configuración</a>
						</ActiveLink>
					</li>
					<li className="flex items-center justify-center ml-8">
						<SunIcon
							className={`h-6 w-auto fill-current mr-2 ${
								isNight ? 'text-mGrayText' : 'text-main'
							}`}
						></SunIcon>
						<Switch
							checked={isNight}
							onChange={setIsNight}
							className={`
								${isNight ? 'bg-mBlack' : 'bg-main'}
								relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0
							`}
						>
							<span className="sr-only">Dark theme</span>
							<span
								aria-hidden="true"
								className={`
									${isNight ? 'translate-x-5' : 'translate-x-0'}
									pointer-events-none inline-block h-5 w-5 rounded-full bg-mBackground shadow-main transform ring-0 transition ease-in-out duration-200
								`}
							/>
						</Switch>
						<MoonIcon
							className={`h-5 w-auto fill-current ml-2 ${
								isNight ? 'text-mBlack' : 'text-mGrayText'
							}`}
						></MoonIcon>
					</li>
					<li className="mx-6 text-mGrayText">V 1.0.0</li>
					<li className="relative">
						<Menu as="Fragment">
							{({ open }) => (
								<>
									<Menu.Button
										className={`py-1 px-2 border rounded-md flex items-center justify-center cursor-pointer ${
											open
												? 'text-main border-main bg-main bg-opacity-10'
												: 'text-mGrayText border-mGrayText hover:border-main hover:text-main'
										}`}
									>
										<UserCircleIcon className="w-auto h-10 fill-current" />
										<ChevronDownIcon className="w-5 h-auto stroke-current ml-1" />
									</Menu.Button>
									<Transition
										enter="transition duration-100 ease-out"
										enterFrom="transform scale-95 -translate-y-3 opacity-0"
										enterTo="transform scale-100 translate-y-0 opacity-100"
										leave="transition duration-75 ease-out"
										leaveFrom="transform scale-100 translate-y-0 opacity-100"
										leaveTo="transform scale-95 -translate-y-3 opacity-0"
									>
										<Menu.Items className="bg-mBackground border border-main absolute top-full right-0 translate-y-2 rounded-md text-main shadow-regular">
											<Menu.Item>
												{({ active }) => (
													<p className="m-0 border-b border-main py-2 px-3 text-sm whitespace-nowrap">
														Logueado como{' '}
														<strong>
															roganoalien
														</strong>
													</p>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														className="block py-2 px-3 hover:bg-main hover:bg-opacity-10"
														href="/logout"
													>
														Cerrar sesión
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</>
							)}
						</Menu>
					</li>
				</ul>
			</nav>
		</div>
	);
}
