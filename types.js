/* @flow */
// https://github.com/facebook/react-native/commit/9c29ee1504a66979d7e87f60e42d437e044a1ada

export type StyleValue = { [key: string]: Object } | number | false | null;
export type Style = StyleValue | Array<StyleValue>;

export type ThemeType = {
	Container: Style,
	Form: Style,
	Bottom: Style,
	Header: Style,
	TextInput: Style,
	Label: {
		Text: Style,
		View: Style,
	},
	ErrorText: Style,
	Switch: Style,
	Slider: Style,
	Touchable: {
		Text: Style,
		Container: Style,
		Icon: {
			size: number,
			color: string,
			style: Style,
		},
	},
};
