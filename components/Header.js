import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function Header() {


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Your Profile</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 15,
    backgroundColor: '#8C00FF',
    alignItems: 'center',
    height: 50,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
  },
});