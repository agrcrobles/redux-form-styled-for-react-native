/* @flow */

const mapError = (
	// $FlowFixMe
	{ meta: { touched, error, warning } = {}, input, ...props },
	errorProp: string = "errorText"
) =>
	touched && (error || warning)
		? {
				...props,
				...input,
				[errorProp]: error || warning,
			}
		: { ...input, ...props };

export default mapError;
