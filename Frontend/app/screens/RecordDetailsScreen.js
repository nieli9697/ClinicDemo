import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function RecordDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View style={styles.detailsContainer}>
      <AppText style={styles.clinic}>{listing.clinic}</AppText>
      <AppText style={styles.item}>{"Doctor: " + listing.doctor}</AppText>
      <AppText style={styles.item}>{"Patient: " + listing.patient}</AppText>
      <AppText style={styles.item}>{"Diagnosis: " + listing.diagnosis}</AppText>
      <AppText style={styles.item}>
        {"Medication: " + listing.medication}
      </AppText>
      <AppText style={styles.item}>
        {"Consultation Fee: " + listing.fee}
      </AppText>
      <AppText style={styles.item}>
        {"Follow up consultation: " + listing.followUp === 1 ? "YES" : "NO"}
      </AppText>
      <AppText style={styles.item}>{"Time: " + listing.time}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 50,
  },
  clinic: {
    fontSize: 24,
    fontWeight: "500",
  },
  item: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default RecordDetailsScreen;
