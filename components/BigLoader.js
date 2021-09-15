function BigLoader({ text }) {
	return (
		<div className="flex justify-center items-center flex-col">
			<img
				src="/main-logo-png.png"
				alt="Mapics Analytics transparentes y privados"
				className="main-logo h-24 w-auto -translate-x-8 mb-7"
			/>
			<p className="text-main text-md text-center m-0 ml-0 mt-1 font-bold animate-bounce">
				{text}
			</p>
		</div>
	);
}

export default BigLoader;
