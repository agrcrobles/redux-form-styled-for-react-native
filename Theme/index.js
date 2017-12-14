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
		alignItems: "flex-end",
		backgroundColor: "transparent",
		paddingHorizontal: 10,
		zIndex: -1,
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
			color: "#555",
			paddingTop: 20,
			paddingBottom: 10,
			fontSize: 14,
			flex: 1,
		},
		View: {
			flexDirection: "row",
			justifyContent: "space-between",
			borderBottomWidth: 1,
			borderBottomColor: "#777",
		},
	},
	ErrorText: {
		color: dark,
	},
	Switch: {
		paddingTop: 5,
		alignItems: "center",
		justifyContent: "center",
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
