// @flow

import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import withTheme from "../Theme/withTheme";
import type { ThemeType } from "../types";

class NativeTouchable extends React.Component<*> {
	render() {
		const hitSlop = { top: 20, left: 20, bottom: 20, right: 20 };
		const { theme, children, ...rest } = this.props;
		return (
			<TouchableOpacity
				style={theme.Touchable.Container}
				hitSlop={hitSlop}
				{...rest}
			>
				<Text style={theme.Touchable.Text}>{children}</Text>
			</TouchableOpacity>
		);
	}
}
export default withTheme(NativeTouchable);
