import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

function ThemeButton() {
	const [isNight, setIsNight] = useState(false);

	return (
		<>
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
		</>
	);
}

export default ThemeButton;
