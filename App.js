import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Header from "./src/components/Header";
import Message from "./src/components/Msg";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Message
          icon="https://github.com/livrariazin.png"
          message="testando as propriedades"
          hora="Enviada: 10 minutos atras"
        />
        <Message
          icon="https://github.com/cnicizima.png"
          message="ainda bem que funcionou"
          hora="Enviada: 5 anos atras"
        />
        <Message
          icon="https://github.com/renancavichi.png"
          message="yippi!!!!!!!!!!!!!!"
          hora="Enviada: 19 anos no futuro"
        />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },
});
