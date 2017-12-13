const primary = "#b71c1c";
const light = "#f05545";
const dark = "#7f0000";
const white = "white";

export default {
	Container: {
		backgroundColor: white,
		flex: 1,
	},
	Form: {
		marginHorizontal: 12,
	},
	Bottom: {
		marginRight: 12,
		marginBottom: 12,
		alignItems: "flex-end",
		backgroundColor: "rgba(0,0,0,0)",
	},
	Header: {
		paddingTop: 40,
		paddingBottom: 20,
		paddingHorizontal: 12,
		backgroundColor: "#336699",
	},
	TextInput: {
		flex: 1,
		textAlign: "right",
	},
	Label: {
		Text: {
			color: "#777",
			paddingTop: 17,
			paddingBottom: 9,
			fontSize: 14,
		},
		View: {
			flexDirection: "row",
			justifyContent: "space-between",
			borderBottomWidth: 1,
			borderBottomColor: dark,
		},
	},
	ErrorText: {
		color: "#c62828",
	},
	Switch: {
		flex: 1,
	},
	Slider: {
		flex: 1,
		padding: 0,
	},
	Touchable: {
		Text: {
			// color: white,
		},
		Container: {
			alignItems: "center",
		},
		Icon: {
			size: 52,
			color: primary,
			style: {
				// backgroundColor: white,
			},
		},
	},
};
