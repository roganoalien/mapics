const API_URL = 'http://localhost:4000/api/v1';

export const postAPI = async (url, data, jwt) => {
	return fetch(`${API_URL}/${url}`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			Authorization: `Bearer ${jwt}`
		}
	}).then((res) => res.json());
};
