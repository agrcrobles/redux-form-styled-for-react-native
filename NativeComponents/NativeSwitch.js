import React from "react";

import { Switch } from "react-native";

import NativeLabelContainer from "./NativeLabelContainer";

class NativeSwitch extends React.Component<*> {
	render() {
		const {
			theme,
			onChange,
			floatingLabelText,
			value,
			disabled,
			tintColor,
		} = this.props;

		return (
			<NativeLabelContainer theme={theme} floatingLabelText={floatingLabelText}>
				<Switch
					style={theme.Switch}
					onValueChange={onChange}
					value={!!value}
					tintColor={tintColor}
					disabled={disabled}
				/>
			</NativeLabelContainer>
		);
	}
}
export default NativeSwitch;
