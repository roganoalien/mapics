const obligatorio = 'Campo obligatorio';

export const loginValues = {
	email: '',
	password: '',
	keep: false
};

export const loginValidate = (values) => {
	const errors = {};

	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Formato inválido';
	}
	if (!values.email) {
		errors.email = obligatorio;
	}
	if (!values.password) {
		errors.password = obligatorio;
	}

	return errors;
};
