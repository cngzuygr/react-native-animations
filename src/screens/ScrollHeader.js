import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Easing, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScrollHeader = () => {
	const scrolling = useRef(new Animated.Value(0)).current;

	const translation = scrolling.interpolate({
		inputRange: [100, 130],
		outputRange: [-100, 0],
		extrapolate: "clamp",
	});

	return (
		<>
			<Animated.View
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: 80,
					backgroundColor: "tomato",
					transform: [{ translateY: translation }],
				}}
			/>

			<Animated.ScrollView
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: {
									y: scrolling,
								},
							},
						},
					],
					{ useNativeDriver: true }
				)}
				// onScroll will be fired every 16ms
				scrollEventThrottle={16}
				style={{ flex: 1 }}
			>
				<View style={{ flex: 1, height: 1000 }} />
			</Animated.ScrollView>
		</>
	);
};

export default ScrollHeader;

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
