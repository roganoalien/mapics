module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layout/**/*.{js,ts,jsx,tsx}',
		'./utils/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Montserrat, Arial, sans-serif']
		},
		extend: {
			boxShadow: {
				right: '10px 0 25px 0 rgba(0,0,0,0.015), 15px 0 40px 0 rgba(0,0,0,0.015)',
				main: '0 10px 30px -15px rgb(255,109,109), 0 10px 30px -10px rgb(255,171,171)',
				mainActive:
					'0 5px 20px -15px rgba(255, 109, 109), 0 5px 20px -10px rgb(255, 171, 171)',
				navigation: '10px 0 52px 0 rgba(0,0,0,0.08)',
				regular:
					'0 10px 25px 0 rgba(0,0,0,0.06), 0 15px 40px 0 rgba(0,0,0,0.03)',
				miniRegular:
					'0 5px 12.5px 0 rgba(0,0,0,0.04), 0 7.5px 20px 0 rgba(0,0,0,0.02)'
			},
			colors: {
				mBlack: '#3B3B3B',
				mBackground: '#F6F6F6',
				mGrayText: '#BEBEBE',
				mGray: '#AAAAAA',
				mGrayLight: '#E3E3E3',
				mGrayBorder: '#DCDCDC',
				main: '#FF6D6D',
				mainLight: '#FFA2A2'
			},
			minHeight: {
				// admin: 'calc(100vh - 92px)'
				admin: 'calc(100vh - 92px - 104px)'
			},
			transitionTimingFunction: {
				cubic: 'cubic-bezier(.175,.885,.32,1.275)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
};
