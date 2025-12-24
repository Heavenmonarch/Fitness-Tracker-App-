import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";

export default function MeScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Me</Text>

      <View style={styles.backupBox}>
        <View>
          <Text style={styles.backupTitle}>Backup & Restore ☁️</Text>
          <Text style={styles.backupSubtitle}>Sign in and synchronize your data</Text>
        </View>

        <Text style={styles.refresh}>🔄</Text>
      </View>


      <View style={styles.premiumBanner}>
        <Text style={styles.premiumTitle}>Premium</Text>
        <Text style={styles.premiumSubtitle}>Get unlimited access to all!</Text>

        <Image
          source={{ uri: "https://i.ibb.co/1XdZHBY/cartoon-man.png" }}
          style={styles.premiumImg}
        />
      </View>


      <View style={styles.rowItem}>
        <Text style={styles.rowLeft}>🅰️ Remove ads</Text>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>₦1,800.00</Text>
        </View>
      </View>


      <Text style={styles.header}>SETTINGS</Text>


      <View style={styles.settingsBox}>
        <View style={styles.settingRow}>
          <Text style={styles.settingLeft}>💧 Workout Settings</Text>
          <Text style={styles.newLabel}>NEW</Text>
        </View>
        <Text style={styles.settingSub}>Music & Coach • Timer • etc.</Text>
      </View>

      <TouchableOpacity style={styles.rowItem}>
        <Text style={styles.rowLeft}>⚙️ General Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rowItem}>
        <Text style={styles.rowLeft}>🌐 Language Options</Text>
        <Text style={styles.rowRightSub}>Default</Text>
      </TouchableOpacity>


      <Text style={styles.header}>SUPPORT US</Text>

      <TouchableOpacity style={styles.rowItem}>
        <Text style={styles.rowLeft}>⭐ Rate us</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginVertical: 20,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
// me
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

// backup and restore styling
  backupBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  backupTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  backupSubtitle: {
    color: "#666",
    marginTop: 4,
  },

  refresh: {
    fontSize: 22,
    marginTop: 5,
  },

// premium box
  premiumBanner: {
    backgroundColor: "#6a57e8",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    overflow: "hidden",
  },

  premiumTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  premiumSubtitle: {
    color: "#dfe6ff",
    marginTop: 5,
    fontSize: 14,
  },

  premiumImg: {
    width: 110,
    height: 110,
    position: "absolute",
    right: 10,
    bottom: 0,
    resizeMode: "contain",
  },

// the row on settings 
  rowItem: {
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rowLeft: {
    fontSize: 16,
  },

  priceBox: {
    backgroundColor: "#6a57e8",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  priceText: {
    color: "#fff",
    fontWeight: "bold",
  },

//   header
  header: {
    color: "#888",
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 10,
  },

// settings
  settingsBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  settingLeft: {
    fontSize: 16,
  },

  newLabel: {
    backgroundColor: "red",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 11,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },

  settingSub: {
    color: "#888",
    marginTop: 5,
  },

  rowRightSub: {
    color: "#888",
    fontSize: 13,
  },
});
