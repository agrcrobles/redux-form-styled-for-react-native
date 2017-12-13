import React, { Component } from "react";
import { Alert, Text, View, StyleSheet } from "react-native";
import MyForm from "./MyForm";
import withTheme from "./Theme/withTheme";
import type { ThemeType } from "./types";

class MyApp extends Component<{
	theme: ThemeType,
}> {
	onSubmit = event => {
		Alert.alert("Title Form", JSON.stringify(event));
	};

	render() {
		const { theme } = this.props;

		return (
			<View style={theme.Container}>
				<View style={theme.Header}>
					<Text style={styles.description}>
						This demo shows how to instance React Native Components with
						redux-form cleanly.
					</Text>
				</View>
				<Text style={styles.title}>redux-form-styled-for-react-native</Text>
				<MyForm onSubmit={this.onSubmit} />
			</View>
		);
	}
}

export default withTheme(MyApp);

const styles = StyleSheet.create({
	description: {
		fontSize: 14,
		color: "white",
		paddingVertical: 10,
	},
	title: {
		paddingHorizontal: 12,
		fontSize: 14,
		paddingVertical: 9,
		backgroundColor: "#999",
		color: "white",
	},
});
