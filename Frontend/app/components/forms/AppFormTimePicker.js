import React, { useState } from "react";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import ErrorMessage from "./ErrorMessage";
import AppText from "../AppText";
import defaultStyles from "../../config/styles";

function AppFormTimePicker({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setFieldValue("time", moment(date).format("YYYY-MM-DD hh:mm:ss"));
    hideDatePicker();
  };

  return (
    <>
      <AppText
        style={styles.container}
        onPress={showDatePicker}
        {...otherProps}
      >
        {moment(values[name]).format("YYYY-MM-DD hh:mm:ss")}
      </AppText>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
});

export default AppFormTimePicker;
