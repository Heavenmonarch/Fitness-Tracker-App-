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
          <Text style={styles.dayText}>Day 3</Text>
          <Text style={styles.levelText}>⚡⚡⚡ Intermediate</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
      </View>

      <View style={styles.infoBox}>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>15</Text>
          <Text>Exercises</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>12 min</Text>
          <Text>Time</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>140 kcal</Text>
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

        {/* 15 NEW + SHUFFLED EXERCISES */}
        <View style={styles.exerciseItem}>
          <Text>🔥 JUMP SQUATS</Text>
          <Text>00:20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💪 BICYCLE CRUNCH</Text>
          <Text>x 20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🏃 HIGH KNEES</Text>
          <Text>00:20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤸 SIDE LUNGES</Text>
          <Text>x 12</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🏋 PUSH UPS</Text>
          <Text>x 12</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🧍 PLANK</Text>
          <Text>00:30</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔄 RUSSIAN TWIST</Text>
          <Text>x 20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤾 MOUNTAIN CLIMBERS</Text>
          <Text>00:20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦵 LEG RAISES</Text>
          <Text>x 14</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 JUMPING JACKS</Text>
          <Text>00:20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💥 REVERSE CRUNCH</Text>
          <Text>x 16</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤸 SKATER JUMPS</Text>
          <Text>00:20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🧘 COBRA STRETCH</Text>
          <Text>00:30</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>😮‍💨 CHILD POSE</Text>
          <Text>00:30</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💪 TRICEP DIPS</Text>
          <Text>x 15</Text>
        </View>
      </ScrollView>

 <TouchableOpacity 
        style={styles.startButton}
        onPress={() => router.push("/exercise")}
      >
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
