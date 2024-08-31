import { StyleSheet, View, Text } from 'react-native';

export default function InputTitle({ label }) {
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});