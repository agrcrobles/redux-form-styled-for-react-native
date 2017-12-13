// @flow

import React, { Component } from "react";

import { Field } from "redux-form"; // 7.2.0
import { Ionicons } from "@expo/vector-icons";
import {
	ScrollView,
	View,
	KeyboardAvoidingView,
	StyleSheet,
} from "react-native";

import { normalize } from "../rules";

import withTheme from "../Theme/withTheme";
import UIField from "../UIField";

// NativeComponents
import NativeInput from "../NativeComponents/NativeInput";
import NativeSwitch from "../NativeComponents/NativeSwitch";
import NativeSlider from "../NativeComponents/NativeSlider";
import NativeTouchable from "../NativeComponents/NativeTouchable";

import type { ThemeType } from "../types";

// Native Fields
const NameTextField = UIField(NativeInput);
const PhoneTextField = UIField(NativeInput);
const SliderField = UIField(NativeSlider);
const SwitchField = UIField(NativeSwitch);

class MyForm extends Component<{
	theme: ThemeType,
	handleSubmit: Function,
}> {
	componentDidMount() {
		this.ref // the Field
			.getRenderedComponent()
			.getRenderedComponent()
			.focus();
	}
	ref: any;
	saveRef = (ref: any) => (this.ref = ref);
	render() {
		const { theme, handleSubmit } = this.props;

		return (
			<KeyboardAvoidingView behavior="padding" style={styles.main}>
				<ScrollView style={theme.Form}>
					<Field
						name="switch"
						component={SwitchField}
						floatingLabelText="Switch me"
					/>
					<Field
						name="name"
						component={NameTextField}
						hintText="Name"
						ref={this.saveRef}
						withRef
						floatingLabelText="Name"
						placeholder="Name"
					/>
					<Field
						name="phone"
						component={PhoneTextField}
						normalize={normalize.toPhone}
						keyboardType="phone-pad"
						hintText="Phone"
						floatingLabelText="Phone"
						placeholder="Phone"
					/>
					<Field
						name="slider"
						component={SliderField}
						floatingLabelText="Slide me"
						minimumValue={0}
						maximumValue={10}
					/>
				</ScrollView>
				<View style={theme.Bottom}>
					<NativeTouchable onPress={handleSubmit(this.props.onSubmit)}>
						<Ionicons name="md-add-circle" {...theme.Touchable.Icon} />
					</NativeTouchable>
				</View>
			</KeyboardAvoidingView>
		);
	}
}
export default withTheme(MyForm);

const styles = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: "space-between",
	},
});
