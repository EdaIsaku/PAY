import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { COLORS } from "../theme";
import { Account, Balance, Options, Identity } from "../components";
import { LinearGradient } from "expo-linear-gradient";
import { OPTIONS } from "../constants";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={["#0181C2", "#08084E"]}
          start={{ x: 0, y: -0.5 }}
          end={{ x: 0.1, y: 1 }}
          style={styles.background}
        >
          <Account />
          <Balance />
          <View style={styles.optionsContainer}>
            {OPTIONS.map((el, idx) => {
              return (
                <Options key={idx} imageSrc={el.imageSrc} option={el.option} />
              );
            })}
          </View>
        </LinearGradient>
      </View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
        style={styles.identityContainer}
      >
        <Identity />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.white,
  },
  gradientContainer: {
    flex: 0.8,
    borderBottomLeftRadius: 20,
    backgroundColor: "blue",
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  identityContainer: {
    flex: 0.2,
  },
  background: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-around",
    paddingHorizontal: 5,
  },
  topContainer: {
    backgroundColor: "red",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
});
