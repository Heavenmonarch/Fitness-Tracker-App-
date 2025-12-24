import { useRouter } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function WorkoutScreen() {
  const router = useRouter();

  return (
    <View style={styles.viewCont}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={styles.dayText}>Day 27</Text>
          <Text style={styles.levelText}>⚡⚡⚡ Intermediate</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
      </View>

      <View style={styles.infoBox}>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>12</Text>
          <Text>Exercises</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>12 min</Text>
          <Text>Time</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>130 kcal</Text>
          <Text>Calories</Text>
        </View>
      </View>

      <View style={styles.settings}>
        <View>
          <Text style={styles.settingsTitle}>Workout Settings</Text>
          <Text>Music & Coach & Timer, etc.</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={24} color="#000" />
      </View>

      <ScrollView style={styles.exerciseBox}>
        <Text style={styles.exerciseTitle}>Exercise</Text>

        <View style={styles.exerciseItem}>
          <Text>🔥 JUMPING JACKS</Text>
          <Text>00:30</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💪 PUSH-UPS</Text>
          <Text>x 14</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦵 SQUATS</Text>
          <Text>x 20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤸 PLANK</Text>
          <Text>00:40</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦶 HEEL TOUCHES</Text>
          <Text>x 25</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 HIGH KNEES</Text>
          <Text>00:35</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💥 LUNGES</Text>
          <Text>x 16</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🧘 COBRA STRETCH</Text>
          <Text>00:30</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💪 TRICEP DIPS</Text>
          <Text>x 15</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 MOUNTAIN CLIMBERS</Text>
          <Text>00:30</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤾 SPRINT IN PLACE</Text>
          <Text>00:40</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦵 LEG RAISES</Text>
          <Text>x 18</Text>
        </View>

      </ScrollView>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startText}>START</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewCont: {
    flex: 1,
    backgroundColor: "#ffffff93",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    marginBottom: 20,
    marginTop: -10,
    backgroundColor: "#6a57e8",
    width: "100%"
  },
  dayText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  levelText: {
    color: "#fff",
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    width: "95%",
    alignSelf: "center"
  },
  infoItem: {
    alignItems: "center",
  },
  infoNumber: {
    fontWeight: "bold",
  },
  settings: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 15,
    padding: 10,
    width: "95%",
    alignSelf: "center"
  },
  settingsTitle: {
    fontWeight: "bold",
  },
  exerciseBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 15,
    padding: 10,
    width: "95%",
    alignSelf: "center"
  },
  exerciseTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  exerciseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
  },
  startButton: {
    backgroundColor: "#6a57e8",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
    width: "75%",
    alignSelf: "center",
    marginBottom: 12
  },
  startText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
