import React, { useState } from "react";
import { Image, StyleSheet, Text, Pressable } from "react-native";
import { COLORS } from "../theme";
import { CustomModal } from "./CustomModal";

export const Options = ({ imageSrc, option }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOptionPress = () => {
    setIsVisible(true);
  };
  const handleCloseModal = () => {
    setIsVisible(false);
  };
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: pressed ? "transparent" : "rgba(255,255,255,0.08)",
          },
        ]}
        onPress={handleOptionPress}
      >
        <Image source={imageSrc} style={styles.image} />
        <Text style={styles.text}>{option}</Text>
      </Pressable>
      <CustomModal
        isVisible={isVisible}
        handleOutsidePress={handleCloseModal}
        handleBtnPress={handleCloseModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 75,
    borderRadius: 15,
    borderWidth: 0.2,
    borderColor: "rgba(255,255,255,0.2)",
  },
  image: {
    width: 27,
    height: 27,
    tintColor: COLORS.white,
    marginBottom: 8,
  },
  text: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "400",
  },
});
