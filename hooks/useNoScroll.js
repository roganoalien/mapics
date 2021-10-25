import { useState } from 'react';

function useNoScroll({ defaultValue = false }) {
	function toggleScroll(value) {
		if (value) {
			document.body.classList.add('h-screen');
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('h-screen');
			document.body.classList.remove('overflow-hidden');
		}
	}

	return [toggleScroll];
}

export default useNoScroll;
