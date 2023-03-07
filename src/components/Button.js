import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { COLORS } from "../theme";

export const Button = ({
  btnText,
  btnColor,
  backgroundColor,
  handleBtnPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        {
          backgroundColor: pressed ? "#ccc" : `${backgroundColor}`,
        },
      ]}
      onPress={handleBtnPress}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: btnColor ? `${btnColor}` : COLORS.white,
          },
        ]}
      >
        {btnText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "85%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#0061a5",
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
