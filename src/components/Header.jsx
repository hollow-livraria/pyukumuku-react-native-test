import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";

export default function Header() {
  //export default importa direto, ja se nao colocar o default precisa botar as chaves na hora de importar.
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("../../assets/Pyukumuku.png")}
      />
      <View style={styles.lista}>
        <Text onPress={() => alert("Home")} style={styles.listaItem}>
          Home
        </Text>
        <Text onPress={() => alert("About")} style={styles.listaItem}>
          About
        </Text>
        <Text onPress={() => alert("Teste")} style={styles.listaItem}>
          Teste
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#D94174",
    width: "100%",
    height: 80,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    top: 0,
  },
  logo: {
    marginLeft: 20,
    padding: 10,
    width: 75,
    height: 75,
  },
  lista: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 25,
    gap: 100,
    borderLeftWidth: 1,
    paddingLeft: 25,
  },
  listaItem: {
    color: "white",
    fontSize: 20,
  },
});
