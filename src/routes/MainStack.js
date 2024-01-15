import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/main/Home";
import { ScreenNames } from "../constants/screenNames";

export default function MainStack() {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name={ScreenNames.home} component={Home} />
    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({});
