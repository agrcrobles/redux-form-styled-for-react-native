// @flow

import React from "react";

import { View, Text } from "react-native";

class NativeLabelContainer extends React.Component<*> {
	render() {
		const { theme, floatingLabelText, children } = this.props;

		return (
			<View style={theme.Label.View}>
				<Text style={theme.Label.Text}>{floatingLabelText}</Text>
				{children}
			</View>
		);
	}
}
export default NativeLabelContainer;
