// @flow

const required = (text?: string) => {
	if (text) {
		return null;
	}
	return (fieldName: string) => `${fieldName} is required`;
};

export default {
	required,
};
