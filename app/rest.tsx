import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RestDay() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Rest Day</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.centerContent}>
        <Ionicons name="cafe-outline" size={80} color="#c7c7c7" />
        <Text style={styles.msg}>
          Your body and muscles need to get some rest
        </Text>
      </View>

      <TouchableOpacity style={styles.finishBtn} onPress={() => router.back()}>
        <Text style={styles.finishTxt}>FINISHED</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: "space-between"
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold"
  },

  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  msg: {
    marginTop: 15,
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    width: "70%"
  },

  finishBtn: {
    backgroundColor: "#6A5EFF",
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
    height: 55,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },

  finishTxt: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold"
  }
});
