import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Time = ({modal, setModal}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        display="spinner"
        is24Hour={true}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  timer: {
    width: '80%',
  },
});
