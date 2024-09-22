import {
  Image,
  StyleSheet,
  Platform,
  View,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type RootTabParamList = {
  home: undefined;
  explore: undefined;
  // Add other tabs here
};

type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "home"
>;

export default function HomeScreen() {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F8C983", dark: "#1D3D47" }}
      headerImage={
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
      }
    >
      <ImageBackground
        source={require("@/assets/images/background.jpeg")}
        style={styles.body}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handlePress(
                "https://book.squareup.com/appointments/exxl3axffjaiyu/location/L8SDJBMG1NZDQ/services/D4BVADM33TXM7SFXI2YKDQFZ"
              )
            }
          >
            <ImageBackground
              source={require("@/assets/images/background.jpeg")}
              style={styles.buttonBackground}
            >
              <ThemedText style={styles.buttonText}>Button 1</ThemedText>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("https://www.viet80sonline.co.uk/")}
          >
            <ImageBackground
              source={require("@/assets/images/background.jpeg")}
              style={styles.buttonBackground}
            >
              <ThemedText style={styles.buttonText}>Button 2</ThemedText>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello World!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <TouchableOpacity
        style={styles.stepContainer}
        onPress={() => navigation.navigate("explore")}
      >
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </TouchableOpacity>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    height: 150,
    width: 150,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  body: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    width: 150,
    height: 150,
  },
  buttonBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
