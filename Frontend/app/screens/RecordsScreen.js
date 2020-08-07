import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const records = [
  {
    id: 1,
    clinic: "Test Clinic",
    doctor: "Test Doctor",
    patient: "Test Patient",
    diagnosis: "test test test",
    medication: "medication medication medication",
    fee: 100,
    followUp: 1,
    time: "2020-08-01 13:00:00",
  },
  {
    id: 2,
    clinic: "Test Clinic 1",
    doctor: "Test Doctor 1",
    patient: "Test Patient 1",
    diagnosis: "test test test",
    medication: "medication medication medication",
    fee: 100,
    followUp: 0,
    time: "2020-08-01 13:05:00",
  },
];

function RecordsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <FlatList
        data={getListingsApi.data}
        data={records}
        keyExtractor={(record) => record.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.doctor}
            subTitle={item.patient}
            onPress={() => navigation.navigate("RecordDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default RecordsScreen;
