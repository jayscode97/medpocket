import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const NAV_ITEMS: { label: string; icon: string; screen: keyof RootStackParamList }[] = [
  { label: 'Conditions', icon: '🫀', screen: 'Conditions' },
  { label: 'Drugs',      icon: '💊', screen: 'Drugs' },
  { label: 'Procedures', icon: '🩺', screen: 'Procedures' },
];

const COLORS = {
  bg:          '#0d1117',
  surface:     '#161b22',
  border:      '#21262d',
  accent:      '#2f81f7',
  textPrimary: '#e6edf3',
  textMuted:   '#8b949e',
};

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.appName}>MedPocket</Text>
        <Text style={styles.tagline}>Emergency Medicine Reference</Text>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={COLORS.textMuted} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search conditions, drugs, procedures…"
          placeholderTextColor={COLORS.textMuted}
        />
      </View>

      <View style={styles.navList}>
        {NAV_ITEMS.map(({ label, icon, screen }, i) => (
          <TouchableOpacity
            key={label}
            style={[styles.navItem, i < NAV_ITEMS.length - 1 && styles.navItemBorder]}
            activeOpacity={0.75}
            onPress={() => navigation.navigate(screen)}
          >
            <Text style={styles.navIcon}>{icon}</Text>
            <Text style={styles.navLabel}>{label}</Text>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.spacer} />
      <Text style={styles.signature}>made by Jean Serhan</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  header: {
    alignItems: 'center',
    paddingTop: 36,
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  appName: {
    fontSize: 36,
    fontWeight: '700',
    color: COLORS.accent,
    letterSpacing: 1,
  },
  tagline: {
    marginTop: 6,
    fontSize: 13,
    color: COLORS.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 24,
    paddingHorizontal: 14,
    gap: 10,
    height: 48,
  },
  searchInput: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 15,
  },

  navList: {
    marginTop: 24,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    overflow: 'hidden',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 16,
  },
  navItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  navIcon: {
    fontSize: 26,
    lineHeight: 32,
    width: 34,
    textAlign: 'center',
  },
  navLabel: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },

  spacer: { flex: 1 },
  signature: {
    textAlign: 'center',
    color: COLORS.textMuted,
    fontSize: 14,
    paddingBottom: 16,
  },
});
