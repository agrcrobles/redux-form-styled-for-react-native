import React from "react";

import { View, Text } from "react-native";

class NativeLabelContainer extends React.Component<*> {
	render() {
		const { theme, floatingLabelText, children } = this.props;

		return (
			<View>
				<Text style={theme.Label}>{floatingLabelText}</Text>
				{children}
			</View>
		);
	}
}
export default NativeLabelContainer;
