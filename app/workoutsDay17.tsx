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
          <Text style={styles.dayText}>Day 17</Text>
          <Text style={styles.levelText}>⚡⚡⚡ Intermediate</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
      </View>

      <View style={styles.infoBox}>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>28</Text>
          <Text>Exercises</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>22 min</Text>
          <Text>Time</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>230 kcal</Text>
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
          <Text>💪 DECLINE PUSH-UPS</Text>
          <Text>x 20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦵 BULGARIAN SPLIT SQUATS</Text>
          <Text>x 15 each leg</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤸‍♂️ PLANK WITH SHOULDER TAPS</Text>
          <Text>x 25</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦶 HEEL TOUCHES</Text>
          <Text>x 30</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 HIGH KNEES</Text>
          <Text>00:45</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💥 BOX STEP-UPS</Text>
          <Text>x 18 each leg</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🧘‍♂️ COBRA STRETCH</Text>
          <Text>00:45</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💪 TRICEP DIPS</Text>
          <Text>x 22</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤸 INCHWORMS</Text>
          <Text>x 15</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦵 SIDE LEG LIFTS</Text>
          <Text>x 18 each side</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 MOUNTAIN CLIMBERS</Text>
          <Text>00:45</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🧘‍♂️ CHILD'S POSE</Text>
          <Text>00:45</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💥 GLUTE BRIDGE</Text>
          <Text>x 25</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤾‍♂️ SPRINT IN PLACE</Text>
          <Text>00:40</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 PLANK HIP TWISTS</Text>
          <Text>x 25</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💪 DIAMOND PUSH-UPS</Text>
          <Text>x 20</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦶 CALF RAISES</Text>
          <Text>x 30</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤸 SQUAT JUMPS</Text>
          <Text>x 22</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💥 BEAR CRAWL</Text>
          <Text>00:40</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 JUMP ROPE (Imaginary)</Text>
          <Text>00:45</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🧘‍♂️ SEATED HAMSTRING STRETCH</Text>
          <Text>00:45</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💪 PLANK TO PUSH-UP</Text>
          <Text>x 18</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦵 LUNGES WITH KNEE DRIVE</Text>
          <Text>x 18 each leg</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🔥 SKATER JUMPS</Text>
          <Text>x 24</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤸‍♂️ INCHWORM TO PUSH-UP</Text>
          <Text>x 15</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🦶 TOES TOUCH</Text>
          <Text>x 30</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>💥 WALL SIT</Text>
          <Text>00:45</Text>
        </View>

        <View style={styles.exerciseItem}>
          <Text>🤾‍♂️ BURPEES</Text>
          <Text>x 20</Text>
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
