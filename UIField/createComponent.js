/* @flow */

/**
 * Creates a component class that renders the given UI component
 *
 * @param UIComponent The ui component to render
 * @param mapProps A mapping of props provided by redux-form to the props the UI
 * component needs
 */
import * as React from "react";
import type { ThemeType } from "../types";
import { Subscriber } from "react-broadcast";

type Props = {
	errorText?: string,
	theme: ThemeType,
};

export default function createComponent(
	UIComponent: React.ComponentType<*>,
	mapProps: (props: Object) => Object
) {
	class InputComponent extends React.Component<Props> {
		// $FlowFixMe
		static displayName = `ReduxFormUI${UIComponent.displayName}`;
		myComponent: any;
		getRenderedComponent() {
			return this.myComponent;
		}
		render() {
			return (
				<Subscriber channel={"theme"}>
					{theme => (
						<UIComponent
							ref={component => (this.myComponent = component)}
							theme={theme}
							{...mapProps(this.props)}
						/>
					)}
				</Subscriber>
			);
		}
	}
	return InputComponent;
}
