import React, { Component } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import MyApp from "./MyApp";

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.description}>
						This demo shows how to instance React Native Components with
						redux-form cleanly.
					</Text>
				</View>
				<KeyboardAvoidingView style={styles.form}>
					<MyApp />
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ecf0f1",
	},
	header: {
		paddingTop: 40,
		padding: 20,
		backgroundColor: "#336699",
	},
	description: {
		fontSize: 14,
		color: "white",
	},
});
