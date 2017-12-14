/* @flow */
// https://flow.org/en/docs/react/hoc/

import * as React from "react";
import type { ThemeType } from "../types";
import { Subscriber } from "react-broadcast";

type ChannelProps = { theme: ThemeType };

function withTheme<Props: {}>(
	Component: React.ComponentType<ChannelProps & Props>
): React.ComponentType<Props> {
	return function WrapperComponent(props: Props) {
		return (
			<Subscriber channel={"theme"}>
				{(data: ThemeType) => <Component {...props} theme={data} />}
			</Subscriber>
		);
	};
}

export default withTheme;
