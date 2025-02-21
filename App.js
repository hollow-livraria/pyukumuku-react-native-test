import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import PyukuBtn from "./src/components/PyukuBtn";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.description}>Pyukumuku muito lindio</Text>
      <View style={styles.containerInterior}>
        <PyukuBtn />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262626",
  },
  containerInterior: {
    border: "1px solid white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    gap: 70,
  },
  pyukumuku: {
    width: 200,
    height: 200,
  },
  description: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },
});
