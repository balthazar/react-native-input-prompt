import { StyleSheet, Platform, Dimensions } from "react-native";

export default StyleSheet.create({
	screenOverlay: {
		height: Dimensions.get("window").height,
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		opacity: 1
	},
	dialogPrompt: {
		...Platform.select({
			ios: {
				opacity: 1,
				backgroundColor: "rgb(222,222,222)",
				borderRadius: 13,
				width: 270,
			},
			android: {
				borderRadius: 3,
				backgroundColor: "white",
	      elevation: 4,
				padding: 16,
	      minWidth: 300
			}
		}),
		marginHorizontal: 20,
		marginTop: 150,
		//
		alignSelf: 'center',
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: {
		...Platform.select({
			ios: {
				padding: 10,
				paddingBottom: 0
			},
		}),
		fontWeight: "bold",
		fontSize: 20,
		color: "black"
	},
	textInput: {
		height: 40,
		paddingHorizontal: 10,
		textAlignVertical: "bottom",
		margin: 20,
		...Platform.select({
			ios: {
				borderRadius: 5,
				width: "90%",
				backgroundColor: "#acafb1"
			},
			android: {
				width: "100%"
			}
		})
	},
	buttonsOuterView: {
		flexDirection: "row",
		...Platform.select({
			ios: {},
			android: {
				justifyContent: "flex-end"
			}
		}),
		width: "100%"
	},
	buttonsDivider: {
		...Platform.select({
			ios: {
				width: 1,
				backgroundColor: "#a7a6a7"
			},
			android: {
				width: 20
			}
		})
	},
	buttonsInnerView: {
		flexDirection: "row",
		...Platform.select({
			ios: {
				borderTopWidth: 0.5,
				borderColor: "#a7a6a7",
				flex: 1
			},
			android: {}
		})
	},
	button: {
		flexDirection: "column",
		justifyContent: "center",

		alignItems: "center",
		...Platform.select({
			ios: { flex: 1 },
			android: {}
		}),
		marginTop: 5,
		padding: 10
	},
	cancelButtonText: {
		fontSize: 16,
		fontWeight: "600",
		color: "black"
	},
	submitButtonText: {
		color: "rgb(0, 129, 251)",
		fontWeight: "600",
		fontSize: 16
	}
});
