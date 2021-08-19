import React from 'react';

function MainFooter() {
	return (
		<footer className="w-full flex flex-col items-center justify-center text-mBlack py-5">
			<p className="text-center w-full">
				hecho por{' '}
				<a
					href="https://rodrigogarcia.com.mx"
					className="text-main font-bold"
				>
					Rodrigo García
				</a>
			</p>
			{/* <p className="text-center w-full text-xs">
				para solicitar funcionalidades o mejoras mandar{' '}
				<a
					href="mailto:hola@rodrigogarcia.com.mx"
					className="text-main font-bold"
				>
					correo
				</a>
			</p> */}
		</footer>
	);
}

export default MainFooter;
