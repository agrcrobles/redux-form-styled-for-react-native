/* @flow */
import * as React from "react";
import type { ThemeType } from "../types";
import { Subscriber } from "react-broadcast";

type Props = {
	theme: ThemeType,
};

const withTheme = (WrappedComponent: React.ComponentType<Props>) => {
	class WithSubscription extends React.Component<Props> {
		// $FlowFixMe
		static displayName = `withTheme${WrappedComponent.displayName}`;

		render() {
			return (
				<Subscriber channel={"theme"}>
					{data => <WrappedComponent theme={data} {...this.props} />}
				</Subscriber>
			);
		}
	}

	return WithSubscription;
};
export default withTheme;
