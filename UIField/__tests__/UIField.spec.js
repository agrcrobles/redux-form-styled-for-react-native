import * as React from "react";
import { TextInput } from "react-native";

import { reducer as formReducer, Field, reduxForm } from "redux-form";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import UIField from "../";
import renderer from "react-test-renderer";
import NativeInput from "../../NativeComponents/NativeInput";

describe("GenericField", () => {
	let store;
	beforeEach(() => {
		store = createStore(combineReducers({ form: formReducer }));
	});
	it("should render UI field", () => {
		const TextComponent = UIField(NativeInput);

		const MyForm = reduxForm(<Field name="name" component={TextComponent} />);

		const rendered = renderer
			.create(
				<Provider store={store}>
					<MyForm />
				</Provider>
			)
			.toJSON();

		expect(rendered).toBeTruthy();
	});
});
