import { StyleSheet} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import { ScreenNames } from "../constants/screenNames";

export default function AuthStack() {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={ScreenNames.login} component={Login} />
    </AuthStack.Navigator>
  );
}

const styles = StyleSheet.create({});
