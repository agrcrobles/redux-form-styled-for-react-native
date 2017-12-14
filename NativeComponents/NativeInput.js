// @flow
import React from "react";

import { Text, TextInput, View } from "react-native";
import NativeLabelContainer from "./NativeLabelContainer";

class NativeInput extends React.Component<*> {
	focus() {
		this.input.focus();
	}
	input: any;
	saveRef = (input: any) => (this.input = input);

	render() {
		const {
			theme,
			errorText,
			onChange,
			floatingLabelText,
			onBlur,
			onFocus,
			value,
			keyboardType,
		} = this.props;
		// injected theme

		return (
			<View>
				<NativeLabelContainer
					theme={theme}
					floatingLabelText={floatingLabelText}
				>
					<TextInput
						style={theme.TextInput}
						underlineColorAndroid="transparent"
						onChangeText={onChange}
						selectTextOnFocus
						onBlur={onBlur}
						ref={this.saveRef}
						onFocus={onFocus}
						value={value}
						placeholder={floatingLabelText}
						keyboardType={keyboardType}
					/>
				</NativeLabelContainer>
				{!!errorText && <Text style={theme.ErrorText}>{errorText}</Text>}
			</View>
		);
	}
}
export default NativeInput;
