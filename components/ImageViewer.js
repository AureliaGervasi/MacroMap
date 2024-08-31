import { StyleSheet, Image, Pressable, Text } from 'react-native';

export default function ImageViewer({ label, onPress }) {

  // const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

  return (
        <Pressable
          style={styles.image}
          onPress={onPress}
        >
          <Text style={{ color: "#000000" }}>{label}</Text>
        </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 105,
    height: 120,
    margin: 7,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
