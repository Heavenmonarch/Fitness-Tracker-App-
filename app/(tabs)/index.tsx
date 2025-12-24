import React from "react";
import { useRouter} from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AbsScreen() {
   const router = useRouter()
  return (
    <ScrollView style={styles.container}>
      
    
      <Text style={styles.title}>Hello User</Text>
      
      <Text style={styles.title}>Thirty day workout streak!</Text>

      <View style={styles.weeklyBox}>
        <View style={styles.weekTop}>
          <Text style={styles.weeklyGoal}>Weekly Goal ✏️</Text>
          <Text style={styles.workouts}>0/3 workouts</Text>
        </View>

        <View style={styles.daysRow}>
          {["23","24","25","26","27","28","29"].map((d, index) => (
            <View 
              key={index}
              style={[
                styles.dayCircle,
                d === "25" && styles.dayActive
              ]}
            >
              <Text style={d === "25" ? styles.dayActiveText : styles.dayText}>{d}</Text>
            </View>
          ))}
        </View>

        <View style={styles.msgBox}>
          <Text>👨🏻 Haven't exercised yet this week?{"\n"}Let's wake up those muscles!</Text>
        </View>
      </View>


      <Text style={styles.sectionTitle}>Daily Challenge</Text>
      <View style={styles.challengeBox}>
        <View style={styles.coreMuscleContainer}>
          <View>
            <Text style={styles.challengeSmall}>Core muscle exercise 🔥</Text>
            <Text style={styles.dayCount}>Day 25</Text>
          </View>
          <View>
            {/* <Image source={require('C:/Users/AYANFE/FitnessTrackerApp/assets/images/ChatGPT Image Nov 21, 2025, 08_49_54 AM.png')} */}
            {/* style={styles.image} /> */}
          </View>
        </View>
        <Text style={styles.dayProgress}>25/30 Days</Text>

        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill} />
        </View>

        <TouchableOpacity style={styles.startBtn}
         onPress={() => router.navigate("/30daysDay5")}>
          <Text style={styles.startText}>START</Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.sectionTitle}>Push Your Limits</Text>
      <View style={styles.pushBox}>
        <Text style={styles.pushTitle}>Start your thirty-day weight-loss journey</Text>
        <Text style={styles.pushDetails}>Intermediate · 19 Min</Text>

        <TouchableOpacity style={styles.startBtnSmall}
        onPress={() => router.navigate("/30days")}
        >
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
    // marginBottom: 15,
    alignSelf: "center"
  },

// weekly goals
  weeklyBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
  },

  weekTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  weeklyGoal: {
    fontWeight: "bold",
  },

  workouts: {
    color: "gray",
  },

  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },

  dayCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },

  dayText: {
    color: "#555",
  },

  dayActive: {
    backgroundColor: "#000",
  },

  dayActiveText: {
    color: "#fff",
    fontWeight: "bold",
  },

  msgBox: {
    backgroundColor: "#eef0ff",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

// daily challenge?
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  challengeBox: {
    backgroundColor: "#6a57e8",
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
  },

  challengeSmall: {
    color: "#fff",
    fontSize: 14,
  },

  dayCount: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 5,
  },

  coreMuscleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    // width: "50%",
    height: 60

  },
  dayProgress: {
    color: "#fff",
    marginBottom: 10,
  },

  progressBarBackground: {
    height: 6,
    backgroundColor: "#fff",
    opacity: 0.4,
    borderRadius: 10,
    marginBottom: 20,
  },

  progressBarFill: {
    width: "25%",
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  startBtn: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },

  startText: {
    fontWeight: "bold",
  },

// push your limits
  pushBox: {
    backgroundColor: "#eee",
    borderRadius: 12,
    padding: 20,
    marginBottom: 80,
  },

  pushTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },

  pushDetails: {
    color: "gray",
    marginBottom: 15,
  },

  startBtnSmall: {
    backgroundColor: "#6a57e8",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    width: 100,
  },
});
