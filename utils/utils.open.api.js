const API_URL = 'http://localhost:4000';

export const postOpen = async (url, data) => {
	return fetch(`${API_URL}/${url}`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json'
		}
	}).then((res) => res.json());
};

export const validateToken = async (token) => {
	return fetch(`${API_URL}/auth/local/token`, {
		method: 'POST',
		body: JSON.stringify({ token }),
		headers: {
			'Content-type': 'application/json'
		}
	}).then((res) => res.json());
};

export const getSuperAdmin = async () => {
	return fetch(`${API_URL}/auth/local/admin`).then((res) => res.json());
};
