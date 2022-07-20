import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Button text={"Moving Box"} navigate={"MovingBox"} />
			<Button text={"Interpolation"} navigate={"Interpolation"} />
			<Button text={"ScrollHeader"} navigate={"ScrollHeader"} />
			<Button text={"Gestures"} navigate={"Gestures"} />
			<Button text={"PanImage"} navigate={"PanImage"} />
			<StatusBar style="light" />
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
	},
});
