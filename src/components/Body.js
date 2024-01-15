import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { wp } from "../constants/dimensions";

export default function Body({ children, style }) {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(25),
  },
});
