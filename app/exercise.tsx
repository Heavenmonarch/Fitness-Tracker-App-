import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function WorkoutExercise() {
  const router = useRouter();

  const motivationalMessages = [
    "You’re stronger than you think!",
    "Keep going. Your body will thank you.",
    "Every rep counts!",
    "Push. Breathe. Believe.",
    "One step closer to your goal.",
    "This is where discipline wins.",
    "Don’t stop. You’ve got this.",
    "Your future self is cheering for you.",
    "Build consistency. Build power.",
    "You control the outcome."
  ];

  const [message, setMessage] = useState("");
  const [time, setTime] = useState(20);

  useEffect(() => {
    setMessage(
      motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
    );

    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Exercise</Text>
        <Ionicons name="fitness" size={26} color="#fff" />
      </View>

      <View style={styles.exerciseBox}>
        <Text style={styles.exerciseName}>JUMPING JACKS</Text>
        <Text style={styles.timer}>{time}s</Text>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${100 - time * 5}%` }]} />
        </View>

        <Text style={styles.motivator}>{message}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlBtn}>
          <Ionicons name="pause" size={26} color="#6a57e8" />
          <Text style={styles.controlTxt}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlBtn}>
          <Ionicons name="play-skip-forward" size={26} color="#6a57e8" />
          <Text style={styles.controlTxt}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlBtn} onPress={() => router.back()}>
          <Ionicons name="close" size={26} color="#6a57e8" />
          <Text style={styles.controlTxt}>Quit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffee",
  },

  header: {
    backgroundColor: "#6a57e8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,
    paddingTop: 50,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  exerciseBox: {
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },

  exerciseName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },

  timer: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#6a57e8",
    marginBottom: 15,
  },

  progressBar: {
    height: 10,
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 20,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#6a57e8",
  },

  motivator: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
    color: "#444",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    paddingHorizontal: 20,
  },

  controlBtn: {
    alignItems: "center",
  },

  controlTxt: {
    marginTop: 5,
    color: "#6a57e8",
    fontWeight: "bold",
  },
});
