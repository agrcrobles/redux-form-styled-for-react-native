// @flow

import { reduxForm } from "redux-form"; // 7.2.0
import { rules, runner } from "../rules";

import MyReduxForm from "./MyReduxForm";

export default reduxForm({
	form: "example",
	initialValues: {
		name: "Jane Doe",
		slider: 0,
	},
	validate: values =>
		runner.run(values, [
			runner.ruleRunner("name", "Name", rules.required),
			runner.ruleRunner("phone", "Phone", rules.required),
		]),
})(MyReduxForm);
