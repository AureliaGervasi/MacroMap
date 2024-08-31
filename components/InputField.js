import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
// import { TextInput } from 'react-native-web';

export default function InputField({ placeholder, theme }) {
  
    if (theme === "measurements") {
        return (
            <View>
                <TextInput 
                    style={styles.measurementsInput}
                    placeholder={placeholder}
                />
            </View>
        )
    }

  return (
    <View>
        <TextInput 
            style={styles.basicInfoInput}
            placeholder={placeholder}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  basicInfoInput: {
    height: 60,
    width: 'auto',
    margin: 10,
    padding: 5,
    fontSize: 16,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  measurementsInput: {
    height: 60,
    width: 100,
    margin: 10,
    padding: 5,
    fontSize: 16,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
});