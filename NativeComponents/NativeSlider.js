// @flow

import React from "react";

import { Slider } from "react-native";

import NativeLabelContainer from "./NativeLabelContainer";

class NativeSwitch extends React.Component<*> {
	render() {
		const {
			theme,
			onChange,
			floatingLabelText,
			value,
			disabled,
			maximumValue,
			minimumValue,
		} = this.props;

		return (
			<NativeLabelContainer theme={theme} floatingLabelText={floatingLabelText}>
				<Slider
					style={theme.Slider}
					onValueChange={onChange}
					value={value}
					disable={disabled}
					maximumValue={maximumValue}
					minimumValue={minimumValue}
				/>
			</NativeLabelContainer>
		);
	}
}
export default NativeSwitch;
