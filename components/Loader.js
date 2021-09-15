function Loader({
	size = '8',
	color = 'text-white',
	horizontal = false,
	text = 'Cargando...'
}) {
	return (
		<div
			className={`flex justify-center items-center ${
				horizontal ? 'flex-row' : 'flex-col'
			}`}
		>
			<svg
				className={`w-${size} h-${size} fill-current ${color} animate-spin`}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z" />
			</svg>
			<p
				className={`${color} text-sm text-center m-0 ${
					horizontal ? 'ml-2' : 'ml-0 mt-1'
				}`}
			>
				{text}
			</p>
		</div>
	);
}

export default Loader;
