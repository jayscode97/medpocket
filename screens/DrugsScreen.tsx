import { StyleSheet, Text, View } from 'react-native';

export default function DrugsScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.icon}>💊</Text>
      <Text style={styles.title}>Drugs</Text>
      <Text style={styles.subtitle}>Coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0d1117',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  icon: { fontSize: 52 },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#e6edf3',
  },
  subtitle: {
    fontSize: 15,
    color: '#8b949e',
  },
});
