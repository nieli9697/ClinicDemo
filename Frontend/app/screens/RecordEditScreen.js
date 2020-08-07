import React, { useState } from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import * as Yup from "yup";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppFormTimePicker from "../components/forms/AppFormTimePicker";
import listingsApi from "../api/listings";

const validationSchema = Yup.object().shape({
  clinic: Yup.string().required().label("Clinic"),
  doctor: Yup.string().required().label("Doctor"),
  patient: Yup.string().required().label("Patient"),
  diagnosis: Yup.string().required().label("Diagnosis"),
  medication: Yup.string().required().label("Medication"),
  fee: Yup.number().required().min(1).max(10000).label("Consultation Fee"),
});

const categories = [
  { label: "Yes", value: 1 },
  { label: "No", value: 0 },
];

function RecordEditScreen() {
  const handleSubmit = async (listing, { resetForm }) => {
    const result = await listingsApi.addListing(listing);
    if (!result.ok) return alert("Could not save the listing!");
    alert("Success!");

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          clinic: "",
          doctor: "",
          patient: "",
          diagnosis: "",
          medication: "",
          fee: "",
          followUp: null,
          time: moment().format("YYYY-MM-DD"),
        }}
        onSubmit={handleSubmit}
        //onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="clinic" placeholder="Clinic" />
        <AppFormField maxLength={255} name="doctor" placeholder="Doctor" />
        <AppFormField maxLength={255} name="patient" placeholder="Patient" />
        <AppFormField
          maxLength={255}
          multiline
          name="diagnosis"
          numberOfLines={3}
          placeholder="Diagnosis"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="medication"
          numberOfLines={3}
          placeholder="Medication"
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="fee"
          placeholder="Consultation Fee"
          width="50%"
        />
        <AppFormPicker
          items={categories}
          name="followUp"
          numberOfColumns={3}
          placeholder="Follow Up"
          width="50%"
        />

        <AppFormTimePicker name="time" width={200} />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RecordEditScreen;
