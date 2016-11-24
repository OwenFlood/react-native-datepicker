import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default class DatePicker extends React.Component {
  render() {
    return (
      <View style={styles.pickerContainer} />
    )
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
})
