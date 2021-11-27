import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Time = ({setTime, modal, setModal}) => {
  const handleConfirm = date => {
    setTime(date.getHours()+':'+date.getMinutes());
    setModal(!modal);
  };

  return (
    <View>
      <DateTimePickerModal
        isVisible={modal}
        mode="time"
        display="spinner"
        is24Hour={true}
        onConfirm={handleConfirm}
        onCancel={() => setModal(!modal)}
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
