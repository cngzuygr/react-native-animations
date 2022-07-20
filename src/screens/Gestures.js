import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { Animated, useWindowDimensions, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CURSOR_SIDE_SIZE = 60;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

const Gestures = () => {
	const touch = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

	const dimensions = useWindowDimensions();

	console.log(dimensions);

	return (
		<SafeAreaView
			onStartShouldSetResponder={() => true}
			onResponderMove={(event) => {
				touch.setValue({
					x: event.nativeEvent.locationX,
					y: event.nativeEvent.locationY,
				});
			}}
			onResponderRelease={() => {
				Animated.spring(touch, {
					toValue: {
						x: dimensions.width / 2 + CURSOR_HALF_SIDE_SIZE,
						y: dimensions.height / 2 + CURSOR_HALF_SIDE_SIZE,
					},
					useNativeDriver: false,
				}).start();
			}}
			style={styles.container}
		>
			<Animated.View
				style={{
					position: "absolute",
					left: Animated.subtract(touch.x, CURSOR_HALF_SIDE_SIZE),
					top: Animated.subtract(touch.y, CURSOR_HALF_SIDE_SIZE),
					height: CURSOR_SIDE_SIZE,
					width: CURSOR_SIDE_SIZE,
					borderRadius: CURSOR_HALF_SIDE_SIZE,
					backgroundColor: "orange",
				}}
			/>
			<StatusBar />
		</SafeAreaView>
	);
};
export default Gestures;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
	},
});
