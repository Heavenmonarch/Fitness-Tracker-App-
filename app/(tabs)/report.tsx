import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";


export default function ReportsScreen() {
  return (
    <ScrollView style={styles.container}>

     
      <Text style={styles.sectionTitle}>Reports</Text>


      <View style={styles.reportsBox}>
        <View style={styles.reportItem}>
          <Text style={styles.reportLabel}>WORKOUTS</Text>
          <Text style={styles.reportValue}>55</Text>
        </View>

        <View style={styles.reportItem}>
          <Text style={styles.reportLabel}>KCAL</Text>
          <Text style={styles.reportValue}>6034.3</Text>
        </View>

        <View style={styles.reportItem}>
          <Text style={styles.reportLabel}>TIME</Text>
          <Text style={styles.reportValue}>4h6m</Text>
        </View>
      </View>


      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>History</Text>
        <Text style={styles.recordsLink}>All Records ➜</Text>
      </View>

      <View style={styles.historyBox}>
        <View style={styles.weekLetters}>
          {["S","M","T","W","T","F","S"].map((d, i) => (
            <Text key={i} style={styles.weekLetter}>{d}</Text>
          ))}
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

        <View style={styles.historyBottom}>
          <Text style={styles.streakText}>🔥 0 Day streak</Text>
          <Text style={styles.bestText}>
            Personal best: <Text style={styles.bestNumber}>12 Day</Text>
          </Text>
        </View>
      </View>

      <View style={styles.weightHeader}>
        <Text style={styles.sectionTitle}>Weight</Text>
        <TouchableOpacity style={styles.logButton}>
          <Text style={styles.logButtonText}>+ Log</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.weightBox} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

// report box
  reportsBox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },

  reportItem: {
    alignItems: "center",
  },

  reportLabel: {
    color: "#888",
    fontSize: 13,
    marginBottom: 5,
  },

  reportValue: {
    fontSize: 22,
    fontWeight: "bold",
  },

// styling for history
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },

  historyTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  recordsLink: {
    color: "#3d62ff",
    fontWeight: "500",
  },

  historyBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },

  weekLetters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  weekLetter: {
    color: "#666",
    width: 35,
    textAlign: "center",
  },

  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
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

  historyBottom: {
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  streakText: {
    fontWeight: "600",
  },

  bestText: {
    color: "#777",
  },

  bestNumber: {
    color: "#000",
    fontWeight: "bold",
  },

// weight
  weightHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  logButton: {
    backgroundColor: "#3d62ff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  logButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  weightBox: {
    backgroundColor: "#fff",
    height: 150,
    borderRadius: 15,
    marginBottom: 50,
  },
});
