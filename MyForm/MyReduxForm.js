// @flow

import React, { PureComponent } from "react";

import { Field } from "redux-form"; // 7.2.0

import { ScrollView } from "react-native";
import NativeInput from "../NativeComponents/NativeInput";
import { normalize } from "../rules";
import type { ThemeType } from "../types";

import UIField from "../UIField";
import NativeTouchable from "../NativeComponents/NativeTouchable";
import NativeSwitch from "../NativeComponents/NativeSwitch";
import NativeSlider from "../NativeComponents/NativeSlider";

const NameTextField = UIField(NativeInput);
const PhoneTextField = UIField(NativeInput);
const SliderField = UIField(NativeSlider);
const SwitchField = UIField(NativeSwitch);

export default class MyForm extends PureComponent<{
	handleSubmit: Function,
	theme: ThemeType,
}> {
	componentDidMount() {
		this.ref // the Field
			.getRenderedComponent()
			.getRenderedComponent()
			.focus();
	}
	ref: any;
	saveRef = (ref: any) => (this.ref = ref);
	onPress = () => {
		this.props.handleSubmit();
	};
	render() {
		return [
			<NativeTouchable key={0} onPress={this.onPress}>
				Click Me!
			</NativeTouchable>,
			<ScrollView key={1}>
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
					name="switch"
					component={SwitchField}
					floatingLabelText="Switch me"
				/>
				<Field
					name="slider"
					component={SliderField}
					floatingLabelText="Slide me"
					minimumValue={0}
					maximumValue={10}
				/>
			</ScrollView>,
		];
	}
}
