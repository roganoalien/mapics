import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/outline';
import NextLink from '../../nextComponents/NextLink';

function UserMenu() {
	return (
		<Menu as={Fragment}>
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
										<strong>roganoalien</strong>
									</p>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<NextLink
										className="block py-2 px-3 hover:bg-main hover:bg-opacity-10"
										href="/logout"
									>
										<a>Cerrar sesión</a>
									</NextLink>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
}

export default UserMenu;
