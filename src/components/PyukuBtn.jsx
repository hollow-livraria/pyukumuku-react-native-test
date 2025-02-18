import { StyleSheet, Button, View } from "react-native";
import { Image } from "expo-image";

export default function PyukuBtn() {
  //export default importa direto, ja se nao colocar o default precisa botar as chaves na hora de importar.
  return (
    <View style={styles.container}>
      <Image
        style={styles.pyukumuku}
        source={require("../../assets/Pyukumuku.png")}
      />
      <Button
        color={"#D94174"}
        title="Pyukumuku"
        onPress={() => alert("Pyukumuku")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pyukumuku: {
    width: 200,
    height: 200,
  },
});
