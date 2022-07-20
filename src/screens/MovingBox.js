import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MovingBox = () => {
	const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
	const translation2 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
	const translation3 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

	const firstOpacity = useRef(new Animated.Value(0)).current;

	const secondOpacity = useRef(new Animated.Value(0)).current;

	const thirdOpacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.sequence([
			Animated.stagger(500, [
				Animated.timing(firstOpacity, {
					toValue: 1,
					useNativeDriver: true,
				}),
				Animated.timing(secondOpacity, {
					toValue: 1,
					useNativeDriver: true,
				}),
				Animated.timing(thirdOpacity, {
					toValue: 1,
					useNativeDriver: true,
				}),
			]),
			Animated.timing(translation.x, {
				toValue: 100, //The value for the box to move
				useNativeDriver: true, //Uses the native driver when true
				delay: 0, //Delay before animation starts
				duration: 500, //Animation duration
				easing: Easing.ease, //Different easing functions
			}),
			Animated.timing(translation2.x, {
				toValue: -100,
				useNativeDriver: true,
				delay: 0,
				duration: 500,
				easing: Easing.ease,
			}),
			Animated.timing(translation3.x, {
				toValue: 100,
				useNativeDriver: true,
				delay: 0,
				duration: 500,
				easing: Easing.ease,
			}),
			Animated.parallel([
				Animated.spring(translation.x, {
					toValue: 0,
					useNativeDriver: true,
					speed: 12, //Controls speed of the animation
					bounciness: 8, //Controls bounciness of the animation
				}),
				Animated.spring(translation2.x, {
					toValue: 0,
					useNativeDriver: true,
				}),
				Animated.spring(translation3.x, {
					toValue: 0,
					useNativeDriver: true,
				}),
			]),
			Animated.stagger(500, [
				Animated.timing(thirdOpacity, {
					toValue: 0,
					useNativeDriver: true,
				}),
				Animated.timing(secondOpacity, {
					toValue: 0,
					useNativeDriver: true,
				}),
				Animated.timing(firstOpacity, {
					toValue: 0,
					useNativeDriver: true,
				}),
			]),
		]).start();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Animated.View
				style={[
					styles.box,
					{
						transform: [
							{ translateX: translation.x },
							{ translateY: translation.y },
						],
						opacity: firstOpacity,
					},
				]}
			/>
			<Animated.View
				style={[
					styles.box,
					{
						transform: [
							{ translateX: translation2.x },
							{ translateY: translation2.y },
						],
						opacity: secondOpacity,
					},
				]}
			/>
			<Animated.View
				style={[
					styles.box,
					{
						transform: [
							{ translateX: translation3.x },
							{ translateY: translation3.y },
						],
						opacity: thirdOpacity,
					},
				]}
			/>
			<StatusBar />
		</SafeAreaView>
	);
};

export default MovingBox;

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
