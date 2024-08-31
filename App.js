import React, { useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {KoHo_700Bold} from '@expo-google-fonts/koho';
import {useFonts} from "expo-font";

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

import Header from './components/Header';
import * as ImagePicker from 'expo-image-picker';
import InputTitle from './components/InputTitle';
import InputField from './components/InputField';

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {

  const [fontsLoaded] = useFonts({
    KoHo_700Bold,
  })
  // if (!fontsLoaded) {
  //   return <Text>Loading...</Text>
  // }

  const [selectedImage, setselectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setselectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  }

  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Yes',
        value: 'yes'
    },
    {
        id: '2',
        label: 'No',
        value: 'no'
    }
]), []);

const [selectedId, setSelectedId] = useState();

  return (
    <>
    <Header 
      style={styles.kohoBold}
    />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <InputTitle label="Basic Info" />
            <InputField placeholder="Name" />
            <InputField placeholder="Current Weight" />
            <InputField placeholder="Goal Weight" />
          </View>
          <View>
            <InputTitle label="Progress Pictures" />
            <View style={styles.imageContainer}>
            <ImageViewer 
                label="Front"
                onPress={pickImageAsync}
                />
              <ImageViewer
                label="Back"
                onPress={pickImageAsync}
                />
              <ImageViewer
                label="Side"
                onPress={pickImageAsync}
                />
            </View>
          </View>
          <View>
            <InputTitle label="Measurements (inches)" />
            <View style={styles.measurementsContainer}>
              <InputField theme="measurements" placeholder="Hips" />
              <InputField theme="measurements" placeholder="Waist" />
              <InputField theme="measurements" placeholder="Chest" />
            </View>
          </View>
          <View>
            <InputTitle label="Preferences" />
            <InputField placeholder="Training Frequency" />
            <InputField placeholder="Meal Frequency" />
            <View style={styles.radioGroup}>
              <InputTitle label="Pre-Workout Meal?" />
              <RadioGroup
                layout='row'
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
              />
            </View>
            <View style={styles.radioGroup}>
              <InputTitle label="Post-Workout Meal?" />
              <RadioGroup
                layout='row'
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
              />
            </View>
            <View style={styles.radioGroup}>
              <InputTitle label="Track Suppements?" />
              <RadioGroup
                layout='row'
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
              />
            </View>
          </View>
          <View style={styles.footerContainer}>
            <Button
              label="Finish"
              /*onPress={pickImageAsync}*/
            />
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  measurementsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  imageContainer: {
    flexDirection: 'row',
    height: 125,
    width: 125,   
    alignItems: 'center',
    // justifyContent: 'space-between', 
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kohoRegular: {
    fontFamily: 'KohoRegular',
  },
  kohoBold: {
    fontFamily: 'KoHo_700Bold',
  },
});
