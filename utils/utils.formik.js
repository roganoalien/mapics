import { v4 as uuidv4 } from 'uuid';
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

export const superAdminValues = {
	email: '',
	password: '',
	confirm_password: '',
	type: 'admin',
	name: '',
	confirmed: true,
	confirmation_code: null,
	super_admin: true
};

export const superAdminValidate = (values) => {
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
	if (values.confirm_password !== values.password) {
		errors.confirm_password = 'Las contraseñas no coinciden';
	}
	if (!values.confirm_password) {
		errors.confirm_password = obligatorio;
	}
	if (!values.name) {
		errors.name = obligatorio;
	}

	return errors;
};

export const newSiteValues = {
	https: 'https://',
	domain: '',
	name: '',
	public: false,
	website_id: uuidv4()
};

export const newSiteValidate = (values) => {
	const errors = {};

	if (!values.domain) {
		errors.domain = obligatorio;
	}
	if (!values.name) {
		errors.name = obligatorio;
	}

	return errors;
};
