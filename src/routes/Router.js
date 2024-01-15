import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector } from "react-redux";
import { navigationRef } from "./RootNaviagtor/RootNavigation";

export default function Router() {
  const authToken = useSelector((state) => state.userDataReducer?.userToken);

  return (
    <NavigationContainer ref={navigationRef}>
      {authToken ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
