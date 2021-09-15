const API_URL = 'http://localhost:4000';

export const postOpen = async (url, data) => {
	console.log('POST OPEN API', data);
	return fetch(`${API_URL}/${url}`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json'
		}
	}).then((res) => res.json());
};
