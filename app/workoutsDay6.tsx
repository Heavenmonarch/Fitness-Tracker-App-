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
          <Text style={styles.dayText}>Day 6</Text>
          <Text style={styles.levelText}>⚡⚡⚡ Intermediate</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
      </View>

      <View style={styles.infoBox}>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>18</Text>
          <Text>Exercises</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>14 min</Text>
          <Text>Time</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>158 kcal</Text>
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

        {/* 18 NEW EXERCISES FOR DAY 6 */}
        <View style={styles.exerciseItem}>
          <Text>🔥 TOE TOUCHES</Text>
          <Text>x 20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🐻 BEAR CRAWL HOLD</Text>
          <Text>00:20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🏃 BUTT KICKS</Text>
          <Text>00:25</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦵 HIP THRUSTS</Text>
          <Text>x 18</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤸 LATERAL LEG RAISES</Text>
          <Text>x 14</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 DEAD BUG</Text>
          <Text>x 16</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💥 V-SIT HOLD</Text>
          <Text>00:20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💪 ARM CIRCLES</Text>
          <Text>00:30</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤾 FAST FEET</Text>
          <Text>00:20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 SUMO SQUATS</Text>
          <Text>x 15</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦶 CALF RAISES</Text>
          <Text>x 20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤸 BIRD DOG</Text>
          <Text>x 12</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 PLANK TO PUSH-UP</Text>
          <Text>x 10</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🏋 WIDE PUSH UPS</Text>
          <Text>x 12</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤾 JUMPING LUNGES</Text>
          <Text>x 14</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🧘 SEATED FORWARD FOLD</Text>
          <Text>00:25</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>😮‍💨 DEEP BREATHING</Text>
          <Text>00:20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💪 SHOULDER TAPS</Text>
          <Text>x 18</Text>
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
