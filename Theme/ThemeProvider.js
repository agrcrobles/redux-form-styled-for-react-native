/* @flow */

import * as React from "react";

import { Broadcast } from "react-broadcast";

import type { ThemeType } from "../types";
class ThemeProvider extends React.Component<{
	Theme: ThemeType,
	children?: React.Node,
}> {
	render() {
		return (
			<Broadcast channel="theme" value={this.props.Theme}>
				{this.props.children}
			</Broadcast>
		);
	}
}
export default ThemeProvider;
