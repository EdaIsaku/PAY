import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ICONS } from "./src/constants";
import { COLORS } from "./src/theme";
import { Home, Settings, QRCode } from "./src/screens";
import * as Font from "expo-font";
const Tab = createBottomTabNavigator();
// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(true);
  const loadFonts = async () => {
    await Font.loadAsync({
      "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
      "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
      "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    });
    setIsReady(true);
  };

  useEffect(() => {
    loadFonts();
  }, [isReady]);

  if (!isReady) {
    console.log("not loaded");
    return null;
  }
  console.log(isReady);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Kreu"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 5,
          },
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Kreu") {
              iconName = ICONS.home;
            } else if (route.name === "Utilitete") {
              iconName = ICONS.utils;
            } else if (route.name === "QRCode") {
              iconName = ICONS.qrcode;
            }

            return route.name !== "QRCode" ? (
              <Image
                source={iconName}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.third : COLORS.gray,
                }}
              />
            ) : (
              <View
                style={{
                  backgroundColor: "#dbdbdb",
                  position: "absolute",
                  top: -37.5,
                  width: 75,
                  height: 75,
                  borderRadius: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "",
                }}
              >
                <Image
                  source={iconName}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? COLORS.third : COLORS.white,
                  }}
                />
              </View>
            );
          },
          tabBarActiveTintColor: COLORS.third,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {},
        })}
      >
        <Tab.Screen name="Kreu" component={Home} />
        <Tab.Screen
          name="QRCode"
          component={QRCode}
          options={{
            tabBarLabel: () => {},
          }}
        />
        <Tab.Screen name="Utilitete" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
