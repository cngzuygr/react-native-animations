import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	Gestures,
	HomeScreen,
	Interpolation,
	MovingBox,
	PanImage,
	ScrollHeader,
} from "../screens";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="MovingBox"
					component={MovingBox}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Interpolation"
					component={Interpolation}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ScrollHeader"
					component={ScrollHeader}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Gestures"
					component={Gestures}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="PanImage"
					component={PanImage}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
