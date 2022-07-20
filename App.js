import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
	const [translation, setTranslation] = useState(-50);
	return <RootNavigator />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
