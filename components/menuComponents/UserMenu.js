import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/outline';
import ActiveLink from '../../nextComponents/ActiveLink';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';

function UserMenu() {
	const router = useRouter();

	const handleLogout = () => {
		console.log('Handle Logout');
		destroyCookie(null, 'mapics');
		router.push('/');
	};

	return (
		<Menu as={Fragment}>
			{({ open }) => (
				<>
					<Menu.Button
						className={`py-1 px-2 border rounded-md flex items-center justify-center focus:outline-none focus:ring-0 cursor-pointer ${
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
						<Menu.Items className="bg-mBackground border border-main absolute top-full right-0 translate-y-2 rounded-md text-main shadow-regular ring-0 ring-main ring-opacity-0 focus:outline-none overflow-hidden">
							{({ active, close }) => (
								<>
									<Menu.Item disabled>
										<p className="m-0 border-b border-main py-2 px-3 text-sm whitespace-nowrap">
											Logueado como{' '}
											<strong>roganoalien</strong>
										</p>
									</Menu.Item>
									<Menu.Item>
										<Menu.Button
											onClick={() => {
												close();
											}}
											className="w-full text-left"
										>
											<ActiveLink
												className={`block py-2 px-3 ${
													active
														? 'bg-main bg-opacity-10'
														: 'hover:bg-main hover:bg-opacity-10'
												}`}
												activeClassName={`block py-2 px-3 bg-main font-bold ${
													active
														? 'bg-opacity-20'
														: 'bg-opacity-10'
												}`}
												href="/admin/cuentas"
											>
												<a>Cuentas</a>
											</ActiveLink>
										</Menu.Button>
									</Menu.Item>
									<Menu.Item>
										<Menu.Button
											onClick={() => {
												close();
											}}
											className="w-full text-left"
										>
											<ActiveLink
												className={`block py-2 px-3 ${
													active
														? 'bg-main bg-opacity-10'
														: 'hover:bg-main hover:bg-opacity-10'
												}`}
												activeClassName={`block py-2 px-3 bg-main font-bold ${
													active
														? 'bg-opacity-20'
														: 'bg-opacity-10'
												}`}
												href="/admin/configuracion"
											>
												<a>Configuración</a>
											</ActiveLink>
										</Menu.Button>
									</Menu.Item>
									<Menu.Item>
										<Menu.Button
											onClick={() => {
												close();
											}}
											className="w-full text-left"
										>
											<ActiveLink
												className={`block py-2 px-3 ${
													active
														? 'bg-main bg-opacity-10'
														: 'hover:bg-main hover:bg-opacity-10'
												}`}
												activeClassName={`block py-2 px-3 bg-main font-bold ${
													active
														? 'bg-opacity-20'
														: 'bg-opacity-10'
												}`}
												href="/admin/perfil"
											>
												<a>Mi perfil</a>
											</ActiveLink>
										</Menu.Button>
									</Menu.Item>
									<Menu.Item as={Fragment}>
										<button
											type="button"
											onClick={handleLogout}
											className="w-full text-left"
										>
											<p className="block py-2 px-3 hover:bg-main hover:bg-opacity-10 w-full text-left">
												Cerrar sesión
											</p>
										</button>
									</Menu.Item>
								</>
							)}
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
}

export default UserMenu;
