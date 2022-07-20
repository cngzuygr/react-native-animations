import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Button = (props) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate(props.navigate)}
		>
			<Text style={styles.text}>{props.text}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		width: "60%",
		borderRadius: 7,
		backgroundColor: "#5D2E8C",
		margin: 20,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		elevation: 50,
	},
	text: {
		color: "white",
		fontSize: 20,
	},
});
