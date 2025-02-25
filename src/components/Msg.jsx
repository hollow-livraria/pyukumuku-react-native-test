import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

export default function Message(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.msgText}>{props.message}</Text>
          <View style={styles.reactions}>
            <Text style={styles.hora}>{props.hora}</Text>
          </View>
        </View>
        <Image source={props.icon} style={styles.icon} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 20,
    gap: 10,
  },
  body: {
    width: 300,
    height: 90,
    backgroundColor: "#1D1D1D",
    border: "3px solid #D94174",
    borderRadius: 10,
    marginBottom: 20,
  },
  msgText: {
    color: "white",
    fontSize: 20,
    padding: 30,
  },
  icon: {
    width: 50,
    height: 50,
    border: "3px solid #D94174",
    borderRadius: 50,
  },
  reactions: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: "auto",
  },
  hora: {
    fontSize: 12,
    color: "white",
  },
});
