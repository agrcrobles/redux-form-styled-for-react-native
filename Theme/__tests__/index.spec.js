import * as React from "react";

import { View } from "react-native";

import ThemeProvider from "../ThemeProvider";
import withTheme from "../withTheme";
import renderer from "react-test-renderer";

describe("TextField", () => {
	it("should render theme prop", () => {
		const MyForm = () => <View />;
		const ThemedForm = withTheme(MyForm);
		const component = (
			<ThemeProvider Theme={{ empty: true }}>
				<ThemedForm />
			</ThemeProvider>
		);
		const rendered = renderer.create(component).toJSON();
		expect(rendered).toBeTruthy();
	});
});
