import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/Text";
import { useDispatch } from "react-redux";
import { userToken } from "../../../store/slices/userSlice/userDataSlice";

export default function Home() {
  const dispatch = useDispatch();
  const changeReduxState = () => {
    dispatch(userToken(""));
  };
  return (
    <View style={styles.container}>
      <Text onPress={changeReduxState}>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
