import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Interpolation = () => {
	const translation = useRef(new Animated.Value(0)).current;
	const translation2 = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.parallel([
			Animated.timing(translation, {
				toValue: 100,
				useNativeDriver: false,
				duration: 2000,
			}),
			Animated.timing(translation2, {
				toValue: 100,
				useNativeDriver: false,
				duration: 2000,
			}),
		]).start();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Animated.View
				style={[
					styles.box,
					{
						backgroundColor: translation.interpolate({
							inputRange: [0, 100],
							outputRange: ["#5D2E8C", "yellow"],
						}),
						transform: [
							{ translateX: translation },
							{
								rotate: translation.interpolate({
									inputRange: [0, 100],
									outputRange: ["0deg", "360deg"],
								}),
							},
						],
						opacity: translation.interpolate({
							inputRange: [0, 50, 100],
							outputRange: [1, 0, 1],
							extrapolate: "clamp",
						}),
					},
				]}
			/>
			<Animated.View
				style={[
					styles.box,
					{
						backgroundColor: translation2.interpolate({
							inputRange: [0, 100],
							outputRange: ["#5D2E8C", "yellow"],
						}),
						transform: [
							{ translateX: translation2 },
							{
								rotate: translation2.interpolate({
									inputRange: [0, 100],
									outputRange: ["0deg", "360deg"],
								}),
							},
						],
						opacity: translation2.interpolate({
							inputRange: [0, 50, 100],
							outputRange: [1, 0, 1],
							extrapolate: "clamp",
						}),
					},
				]}
			/>
			<StatusBar />
		</SafeAreaView>
	);
};

export default Interpolation;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		justifyContent: "center",
		alignItems: "center",
	},
	box: {
		width: 100,
		height: 100,
		margin: 10,
		backgroundColor: "#5D2E8C",
	},
});
