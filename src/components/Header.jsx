import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import Entypo from "@expo/vector-icons/Entypo";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={"https://github.com/livrariazin.png"}
        style={styles.icon}
      />
      <Text style={styles.name}>Livrariazin</Text>
      <Entypo name="menu" size={50} color="#992E52" style={styles.menu} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  name: {
    color: "white",
    fontSize: 20,
  },
  menu: {
    marginLeft: "auto",
    marginRight: 20,
  },
});
