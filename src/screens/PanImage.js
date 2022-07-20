import React, { useRef } from "react";
import {
	Animated,
	Image,
	PanResponder,
	StyleSheet,
	useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const IMAGE_URI =
	"https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const pointsDistance = ([xA, yA], [xB, yB]) => {
	return Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
};

const PanImage = () => {
	const dimensions = useWindowDimensions();

	const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
	const scale = useRef(new Animated.Value(1)).current;

	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gestureState) => {
				const activeTouches = event.nativeEvent.changedTouches.length;

				if (activeTouches === 1) {
					pan.setValue({
						x: gestureState.dx,
						y: gestureState.dy,
					});
				} else if (activeTouches >= 2) {
					const touches = event.nativeEvent.changedTouches;

					const touchA = touches[0];
					const touchB = touches[1];

					const distance = pointsDistance(
						[touchA.pageX, touchA.pageY],
						[touchB.pageX, touchB.pageY]
					);

					const screenMovedPercents = distance / dimensions.width;

					scale.setValue(1 + screenMovedPercents * 3);
				}
			},
			onPanResponderRelease: () => {
				Animated.parallel([
					Animated.spring(pan, {
						toValue: {
							x: 0,
							y: 0,
						},
						useNativeDriver: true,
					}),
					Animated.spring(scale, {
						toValue: 1,
						useNativeDriver: true,
					}),
				]).start();
			},
		})
	).current;

	return (
		<SafeAreaView style={styles.container}>
			<Animated.Image
				{...panResponder.panHandlers}
				source={{ uri: IMAGE_URI }}
				style={{
					height: 200,
					width: "90%",
					borderRadius: 10,
					transform: [{ translateX: pan.x }, { translateY: pan.y }, { scale }],
				}}
			/>
		</SafeAreaView>
	);
};

export default PanImage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		justifyContent: "center",
		alignItems: "center",
	},
});
