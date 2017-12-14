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

type ChannelProps = { theme: ThemeType };

export default function createComponent<
	Props: {
		errorText?: string,
		children?: React.Node,
	}
>(
	UIComponent: React.ComponentType<Props>,
	mapProps: (props: Props) => Object
): React.ComponentType<ChannelProps & Props> {
	class InputComponent extends React.Component<ChannelProps & Props> {
		static displayName = `ReduxFormUI${UIComponent.displayName || "undefined"}`;
		myComponent: React.ComponentType<ChannelProps & Props>;
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
