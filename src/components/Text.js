import { StyleSheet, Text as Textt, View } from "react-native";
import React from "react";
import { Fonts } from "../constants/fontFamily";
import { Colors } from "../constants/colors";

export default function Text({
  children,
  style,
  onPress,
  color,
  ...otherProps
}) {
  return (
    <Textt
      style={{ ...styles.text(color), ...style }}
      onPress={onPress}
      {...otherProps}
    >
      {children}
    </Textt>
  );
}

const styles = StyleSheet.create({
  text: (color) => ({
    color: color ? color : Colors.textBlack,
  }),
});
