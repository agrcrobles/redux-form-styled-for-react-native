// @flow
const ruleRunner = (field: string, name: string, ...validations: Array<*>) => (
	state: Object = {}
) => {
	for (const v of validations) {
		// $FlowFixMe
		const errorMessageFunc = v(state[field], (state: any));

		if (errorMessageFunc) {
			return { [field]: errorMessageFunc(name) };
		}
	}
	return null;
};

const run = (state: Object, runners: Array<*>) =>
	runners.reduce((memo, runner) => Object.assign(memo, runner(state)), {});

export default {
	ruleRunner,
	run,
};
