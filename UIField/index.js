/* @flow */
import * as React from "react";
import createComponent from "./createComponent";
import mapError from "./mapError";

type Options = {};

const UIField = (
	UIFieldComponent: React.ComponentType<*>,
	options: Options = {}
) =>
	createComponent(UIFieldComponent, ({ defaultValue, ...props }) => {
		const UIComponent = {
			...props,
			...mapError(props),
		};
		return UIComponent;
	});
export default UIField;
