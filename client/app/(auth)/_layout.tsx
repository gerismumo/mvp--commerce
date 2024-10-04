import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Auth () {
    return (
        <Stack>
            <Stack.Screen name="login" options={{
                 headerShown: false,
            }}/>
            <Stack.Screen name="signup" options={{
                 headerShown: false,
            }}/>
        </Stack>
    )
}