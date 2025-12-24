import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WorkoutScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        {/* <Text style={styles.level}></Text> */}
        <Text style={styles.title}>Thirty-day Core Muscle building plan</Text>
      </View>

      <View style={styles.daysLeftBox}>
        <Text style={styles.daysLeft}>25 days left</Text>
        <View style={styles.progressLine}></View>
      </View>

 
<TouchableOpacity
  style={styles.dayBoxActive}
  onPress={() => router.navigate("/workouts")}
>
  <View>
    <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
      Day 1
    </Text>
    <Text style={{ color: "white" }}>13 Exercises</Text>
  </View>

  <TouchableOpacity
    style={styles.startBtn}
    onPress={() => router.navigate("/workoutsDay5")}
  >
    <Text style={styles.startTxt}>START</Text>
  </TouchableOpacity>
</TouchableOpacity>
<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay2")}
>
  <Text style={styles.dayLabel}>Day 2</Text>
  <Text style={styles.exercises}>14 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay3")}
>
  <Text style={styles.dayLabel}>Day 3</Text>
  <Text style={styles.exercises}>15 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/rest")}
>
  <Text style={styles.dayLabel}>Day 4</Text>
  <Text style={styles.rest}>☕ Rest</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay5")}
>
  <Text style={styles.dayLabel}>Day 5</Text>
  <Text style={styles.exercises}>18 Exercises</Text>
</TouchableOpacity>


<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay6")}
>
  <Text style={styles.dayLabel}>Day 6</Text>
  <Text style={styles.exercises}>18 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay7")}
>
  <Text style={styles.dayLabel}>Day 7</Text>
  <Text style={styles.exercises}>21 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/rest")}
>
  <Text style={styles.dayLabel}>Day 8</Text>
  <Text style={styles.rest}>☕ Rest</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay9")}
>
  <Text style={styles.dayLabel}>Day 9</Text>
  <Text style={styles.exercises}>18 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay10")}
>
  <Text style={styles.dayLabel}>Day 10</Text>
  <Text style={styles.exercises}>12 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay11")}
>
  <Text style={styles.dayLabel}>Day 11</Text>
  <Text style={styles.exercises}>22 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/rest")}
>
  <Text style={styles.dayLabel}>Day 12</Text>
  <Text style={styles.rest}>☕ Rest</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay13")}
>
  <Text style={styles.dayLabel}>Day 13</Text>
  <Text style={styles.exercises}>17 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay14")}
>
  <Text style={styles.dayLabel}>Day 14</Text>
  <Text style={styles.exercises}>14 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay15")}
>
  <Text style={styles.dayLabel}>Day 15</Text>
  <Text style={styles.exercises}>18 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/rest")}
>
  <Text style={styles.dayLabel}>Day 16</Text>
  <Text style={styles.rest}>☕ Rest</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay17")}
>
  <Text style={styles.dayLabel}>Day 17</Text>
  <Text style={styles.exercises}>28 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay18")}
>
  <Text style={styles.dayLabel}>Day 18</Text>
  <Text style={styles.exercises}>21 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay19")}
>
  <Text style={styles.dayLabel}>Day 19</Text>
  <Text style={styles.exercises}>14 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/rest")}
>
  <Text style={styles.dayLabel}>Day 20</Text>
  <Text style={styles.rest}>☕ Rest</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay21")}
>
  <Text style={styles.dayLabel}>Day 21</Text>
  <Text style={styles.exercises}>25 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay22")}
>
  <Text style={styles.dayLabel}>Day 22</Text>
  <Text style={styles.exercises}>17 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay23")}
>
  <Text style={styles.dayLabel}>Day 23</Text>
  <Text style={styles.exercises}>18 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/rest")}
>
  <Text style={styles.dayLabel}>Day 24</Text>
  <Text style={styles.rest}>☕ Rest</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay25")}
>
  <Text style={styles.dayLabel}>Day 25</Text>
  <Text style={styles.exercises}>18 Exercises</Text>
</TouchableOpacity>


<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay26")}
>
  <Text style={styles.dayLabel}>Day 26</Text>
  <Text style={styles.exercises}>23 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay27")}
>
  <Text style={styles.dayLabel}>Day 27</Text>
  <Text style={styles.exercises}>12 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/rest")}
>
  <Text style={styles.dayLabel}>Day 28</Text>
  <Text style={styles.rest}>☕ Rest</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay29")}
>
  <Text style={styles.dayLabel}>Day 29</Text>
  <Text style={styles.exercises}>19 Exercises</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.dayBox}
  onPress={() => router.navigate("/workoutsDay30")}
>
  <Text style={styles.dayLabel}>Day 30</Text>
  <Text style={styles.exercises}>18 Exercises</Text>
</TouchableOpacity>

       <TouchableOpacity style={styles.backBtn}
              onPress={() => router.navigate("/")}
              >
           <Text style={styles.backText}>Back to Home</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff93"
  },

  headerSection: {
    padding: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
    // borderRadius: 10,
    backgroundColor: "#6a57e8"
  },
  level: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  daysLeftBox: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  daysLeft: {
    fontSize: 16,
    marginBottom: 5,
    color: "#444",
  },
  progressLine: {
    height: 5,
    backgroundColor: "#ddd",
    width: "100%",
    borderRadius: 10,
  },

  dayBoxActive: {
    backgroundColor: "#6a57e8",
    marginHorizontal: 15,
    borderRadius: 12,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  dayBox: {
    backgroundColor: "#ffffffee",
    marginHorizontal: 15,
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
  },

  dayLabel: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  exercises: {
    color: "#777",
  },

  rest: {
    marginTop: 5,
    fontSize: 16,
    color: "#777",
  },

  startBtn: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 30,
  },
  startTxt: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4a32ddff",
  },
    backBtn: {
    backgroundColor: "#4a32ddff",
    paddingVertical: 12,
    // borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 12,
    width: "75%"
  },

  backText: {
    fontWeight: "bold",
    color: "#fff"
  },

});
