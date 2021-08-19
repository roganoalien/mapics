import NextLink from '../nextComponents/NextLink';
import ActiveLink from '../nextComponents/ActiveLink';
import ThemeButton from '../components/menuComponents/ThemeButton';
import UserMenu from '../components/menuComponents/UserMenu';

export default function MainMenu() {
	return (
		<div className="w-full relative z-10">
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
							activeClassName="text-main font-medium"
							className="text-mGrayText hover:text-mainLight"
						>
							<a>Sitios</a>
						</ActiveLink>
					</li>
					<li className="ml-8">
						<ActiveLink
							href="/admin/configuracion"
							activeClassName="text-main"
							className="text-mGrayText hover:text-mainLight"
						>
							<a>Configuración</a>
						</ActiveLink>
					</li>
					<li className="flex items-center justify-center ml-8">
						<ThemeButton />
					</li>
					<li className="mx-6 text-mGrayText">V 0.0.1</li>
					<li className="relative">
						<UserMenu />
					</li>
				</ul>
			</nav>
		</div>
	);
}
